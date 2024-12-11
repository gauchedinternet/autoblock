interface Action {
    info: string,
    target: string,
    action: string,
    timeout: number
    check?: (self: HTMLElement, stored: string[]) => boolean,
    sleep: number
}

interface Task {
    blockListKey: string;
    profileUrl: (username: string) => string;
    actionsList: Action[]
}

export class Account {
    constructor(public network: string, public username: string) {
    }
}

export type configsT = { [key: string]: Task };

export type MyInputEvent = Event & { currentTarget: EventTarget & HTMLInputElement; }