import {StorageSvelte} from "./storage.svelte";
import {configs} from "./config";
import {simulateMouseEvent, sleep, waitForElement} from "./utils";

export async function init() : Promise<void> {
    await StorageSvelte.init();
    if (!StorageSvelte.data.state) return

    const account = StorageSvelte.lookAccount();

    if (!account) {
        console.log(`All the users were blocked!`);
        StorageSvelte.switchState()
        window.location.href = window.location.host;
        return
    }

    const host = account.network
    const url = configs[host].profileUrl(account.username)

    if (!window.location.href.includes(url)) {
        window.location.href = url;
        return;
    }

    const blocked = await performBlockOperation(host);

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

    await init()
}

export async function startPause() : Promise<void> {
    StorageSvelte.switchState()
    await init()
}

export function stop() : void {
    StorageSvelte.reset()
    console.log(StorageSvelte.data)
}

async function performBlockOperation(host: string) : Promise<boolean> {

    const store = Array<string>()

    for (const action of configs[host].actionsList) {
        console.log("tom", action, StorageSvelte.data.state)
        if (!StorageSvelte.data.state) return false
        console.log("tom", action, StorageSvelte.data.state)
        try {
            const target = await waitForElement(action.target, action.timeout)

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
