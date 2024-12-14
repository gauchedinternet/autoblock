import {Account, type MyInputEvent} from "./types";

class StorageBase {
    public account: Account[] = []
    public blocked = 0
    public notBlocked = 0
    public state: boolean = $state(false) // true to execute blocking, false to stop it
    public hide: boolean = $state(false)
    public loaded: boolean = $state(false)

    public reset() {
        this.account = []
        this.blocked = 0
        this.notBlocked = 0
        this.state = false
        this.loaded = false
    }

    public load(obj: StorageBase) {
        this.account = obj.account
        this.blocked = obj.blocked
        this.notBlocked = obj.notBlocked
        this.state = obj.state
        this.loaded = obj.loaded
        this.hide = obj.hide
    }

    public export() {
        const data = JSON.parse(JSON.stringify(this))
        data.state = this.state
        data.loaded = this.loaded
        data.hide = this.hide
        return JSON.stringify(data)
    }
}

export class StorageSvelte {

    static data: StorageBase = new StorageBase();

    static reset(): void {
        this.data.reset()
        this.save()
    }

    static async init() {
        const l = await GM.getValue("autoBlock")
        if (l !== undefined) {
            this.data.load(JSON.parse(l))
        }
    }

    static accountLength() {
        return this.data.account.length
    }

    static lookAccount() : Account | undefined  {
        return this.data.account.at(0)
    }

    static popAccount() {
        const l = this.data.account.shift()
        this.save()
        return l
    }

    static writeAccount(data: Account[]) {
        this.data.account = data
    }

    static switchState() {
        this.data.state = !this.data.state
        this.save()
    }

    static resetCounters() {
        this.data.blocked = 0
        this.data.notBlocked = 0
        this.save()
    }


    static save() {
        GM.setValue("autoBlock", this.data.export())
    }

    static async loadFromInputFile(event: MyInputEvent) {
        const file = event.target!.files[0];
        const text = await file.text();
        const entries = text.split(/\r?\n/).map(
            (line: string) => {
                const e = line.split(",")
                return new Account(e[0], e[1])
            }
        )

        this.writeAccount(entries)
        this.resetCounters()
        this.data.loaded = true
        this.save()
    }

    static async loadFromKey(key: string) {

        const file = await GM.xmlHttpRequest({url: `https://raw.githubusercontent.com/gauchedinternet/autoblock/refs/heads/main/listes/${key}.txt`});
        const text = file.responseText;
        console.log(file, text)
        const entries = text.split(/\r?\n/).map(
            (line: string) => {
                return new Account(key, line)
            }
        )

        this.writeAccount(entries)
        this.resetCounters()
        this.data.loaded = true
        this.save()
    }
}
