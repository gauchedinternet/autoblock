interface Action {
    info: string,
    target: string,
    action: string,
    timeout: number
    check?: (self: HTMLElement, stored: string[]) => boolean,
    sleep: number
}

interface Task {
    key: string;
    name: string;
    profileUrl: (username: string) => string;
    actionsList: Action[]
}

export type configsT = Record<string, Task>

export class Account {
    constructor(public network: string, public username: string) {
    }
}

export type MyInputEvent = Event & { currentTarget: EventTarget & HTMLInputElement; }

