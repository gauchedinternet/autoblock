import {Storage} from "./storage";
import {configs} from "./config";
import {simulateMouseEvent, sleep, waitForElement} from "./utils";

export class Autoblock {
    static async init() {
        Storage.init()

        if (!Storage.data.state){
            return;
        }

        const account = Storage.lookAccount();

        if (!account) {
            console.log(`All the users were blocked!`);
            Storage.switchState()
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

        if (blocked){
            Storage.data.blocked++
        }
        else {
            Storage.data.notBlocked++
        }

        if (Storage.accountLength() > 0){
            Storage.popAccount()
        }

        Storage.save()

        await this.init()
    }

     static async startStopResume(){
        Storage.resetCounters()
        Storage.switchState()
        await this.init()
    }

    static async performBlockOperation(host: string) {

        let store = Array<string>()
        let blocked = true

        for (let action of configs[host].actionsList){

            console.info(action.info)
            try {
                let target = await waitForElement(action.target, action.timeout)

                if (action.check && !action.check(target,store)) break

                if (action.action === "store") {
                    if (target.textContent === null) {
                        store.push("")
                    }
                    else {
                        store.push(target.textContent)
                    }
                }
                else {
                    simulateMouseEvent(target, action.action);
                }

                await sleep(action.sleep)
            } catch (error) {
                blocked = false
                console.trace(error)
                break
            }

        }

        return blocked
    }
}