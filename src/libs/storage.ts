import {Account, type MyInputEvent} from "./types";

class StorageBase {
    public account: Account[] = []
    public blocked:number =0
    public notBlocked:number = 0
    public state:boolean = false // true to execute blocking, false to stop it
    public hide: boolean = false
}

export class Storage {

    static data: StorageBase = new StorageBase();

    static init() {
        let l = localStorage.getItem("autoBlock")
        if (l !== null) {
            this.data = JSON.parse(l)
        }
    }

    static accountLength() {
        return this.data.account.length
    }

    static lookAccount() {
        return this.data.account[0]
    }

    static popAccount() {
        let l = this.data.account.shift()
        this.save()
        return l
    }

    static pushAccount(acc:Account) {
        this.data.account.push(acc)
        this.save()
    }

    static writeAccount(data:Account[]) {
        this.data.account = data
        this.save()
    }

    static switchState() {
        this.data.state = !this.data.state
        this.save()
    }

    static resetCounters(){
        this.data.blocked = 0
        this.data.notBlocked = 0
        this.save()
    }


    static save(){
        localStorage.setItem("autoBlock", JSON.stringify(this.data))
    }

    static async loadFromInputFile(event:MyInputEvent) {
        const file = event.target!.files[0];
        const text = await file.text();
        const entries = text.split(/\r?\n/).map(
            (line:string) => {
                let e = line.split(",")
                return new Account(e[0], e[1])
            }
        )

        this.writeAccount(entries)
        console.log(Storage.data)
    }
}
