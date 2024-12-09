import type {configsT} from "./types";

export let configs : configsT = {
    "www.instagram.com" : {
        // Key to access Instagram block list in localStorage.

        blockListKey : 'instagramBlockList',
        profileUrl : (username:string) => {return `https://www.instagram.com/${username}`},
        actionsList : [
            {   info : "Searching for option button",
                target : '[role="button"]:has([aria-label="Options"])',
                action : "click",
                timeout: 5000,
                sleep:1000
            },
            {info : "Searching for follow button", target : 'button:nth-child(1)', action : "store", timeout: 5000, sleep:1000},
            {info : "Searching for block button", target : '[role="dialog"] button:nth-child(1)', action : "click", check : (self,stored) => {return self.innerText !== stored.at(-1)} , timeout: 5000, sleep:1000},
            {info : "Searching for block confirmation button", target : '[role="dialog"] button:nth-child(1):nth-last-of-type(2)', action : "click", timeout: 5000, sleep:1000},
        ]
    },
    "www.tiktok.com" : {
        // Key to access TikTok block list in localStorage.
        blockListKey : 'tiktokBlockList',
        profileUrl : (username:string) => {
            username = username.startsWith("@") ? username : "@" + username
            return `https://www.tiktok.com/${username}`
        },
        actionsList : [
            {info : "Searching for option button", target : '[data-e2e="user-more"]', action : "mouseover", timeout: 5000, sleep:1000},
            {info : "Searching for follow button", target : '[data-e2e="follow-button"]', action : "store", timeout: 5000, sleep:1000},
            {info : "Searching for block button", target : '[data-e2e="user-report"] [role="button"]:nth-last-of-type(1)', action : "click", check : (self,stored) => {return self.innerText !== stored.at(-1)}, timeout: 5000, sleep:1000},
            {info : "Searching for block confirmation button", target : 'button[data-e2e="block-popup-block-btn"]', action : "click", timeout: 5000, sleep:1000},
        ]
    },
    "x.com" : {
        // Key to access Twitter(X) block list in localStorage.

        blockListKey : 'xBlockList',
        profileUrl : (username:string) => {return `https://x.com/${username}`},
        actionsList : [
            {info : "Searching for follow button", target : '[data-testid="placementTracking"] button', action : "mouseover", timeout: 5000, sleep:1000},
            {info : "Storing follow button", target : '[data-testid="placementTracking"]', action : "store", timeout: 5000, sleep:1000},
            {info : "Searching for option button", target : '[data-testid="userActions"]', action : "click", timeout: 5000, sleep:1000},
            {info : "Searching for block button", target : '[data-testid="block"]', action : "click", check : (self,stored) => {return !self.innerText.includes(<string>stored.at(-1)) } , timeout: 5000, sleep:1000},
            {info : "Searching for block confirmation button", target : '[data-testid="confirmationSheetConfirm"]', action : "click", timeout: 5000, sleep:1000},
        ]
    },
    "bsky.app" : {
        // Key to access blueskyapp block list in localStorage.
        blockListKey : 'bskyBlockList',
        profileUrl : (username:string) => {
            return `https://bsky.app/profile/${username}`
        },
        actionsList : [
            {info : "Searching for follow button", target : '[role="button"][data-testid="followBtn"]', action : "store", timeout: 5000, sleep:1000},
            {info : "Searching for option button", target : '[role="button"][data-testid="profileHeaderDropdownBtn"]', action : "click", timeout: 5000, sleep:1000},
            {info : "Searching for block button", target : '[role="menuitem"][data-testid="profileHeaderDropdownBlockBtn"]', action : "click", check : (self,stored) => {return self.innerText !== stored.at(-1)}, timeout: 5000, sleep:1000},
            {info : "Searching for block confirmation button", target : '[role="button"][data-testid="confirmBtn"]', action : "click", timeout: 5000, sleep:1000},
        ]
    }
}