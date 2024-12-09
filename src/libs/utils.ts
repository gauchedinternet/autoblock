export function sleep(time:number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export function waitForElement(selector:string, timeout:number) : Promise<HTMLElement> {
    return new Promise((resolve, reject) => {
        const intervalTime = 100;
        const endTime = Number(new Date()) + timeout;

        const timer = setInterval(() => {
            if (Number(new Date()) > endTime) {
                clearInterval(timer);
                reject(new Error("Element not found within time: " + selector));
            }
            const el = document.querySelector(selector);
            if (el) {
                clearInterval(timer);
                resolve(el as HTMLElement);
            }
        }, intervalTime);
    });
}

export function simulateMouseEvent(element:Element, eventType:string) {
    console.log(`Simulating ${eventType} event`);
    const event = new MouseEvent(eventType, {
        view: window,
        bubbles: true,
        cancelable: true
    });
    element.dispatchEvent(event);
    console.log(`${eventType} event triggered`);
}