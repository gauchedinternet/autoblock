import {StorageSvelte} from "./storage.svelte";
import {configs} from "./config";
import {simulateMouseEvent, sleep, waitForElement} from "./utils";

export class AutoblockSvelte {
    static async init() {
        if (!StorageSvelte.data.state) return

        const account = StorageSvelte.lookAccount();

        if (!account) {
            console.log(`All the users were blocked!`);
            StorageSvelte.switchState()
            window.location.href = window.location.host;
            return
        }

        let host = account.network
        let url = configs[host].profileUrl(account.username)

        if (!window.location.href.includes(url)) {
            window.location.href = url;
            return;
        }

        let blocked = await this.performBlockOperation(host);

        if (blocked) {
            StorageSvelte.data.blocked++
        } else {
            StorageSvelte.data.notBlocked++
        }

        if (StorageSvelte.accountLength() > 0) {
            StorageSvelte.popAccount()
        }

        StorageSvelte.save()

        await sleep(3000)

        await this.init()
    }

    static async startPause() {
        StorageSvelte.switchState()
        await this.init()
    }

    static async stop() {
        StorageSvelte.reset()
        console.log(StorageSvelte.data)
    }

    static async performBlockOperation(host: string) {

        let store = Array<string>()

        for (let action of configs[host].actionsList) {
            if (!StorageSvelte.data.state) return false
            try {
                let target = await waitForElement(action.target, action.timeout)

                if (action.check && !action.check(target, store)) break

                if (action.action === "store") {
                    if (target.textContent === null) {
                        store.push("")
                    } else {
                        store.push(target.textContent)
                    }
                } else {
                    simulateMouseEvent(target, action.action);
                }

                await sleep(action.sleep)
            } catch (error) {
                console.trace(error)
                return false
            }
        }
        return true
    }
}