// @ts-ignore
if (process?.versions?.node != null) {
    // ensure TextEncoder and TextDecoder are available in global scope in node
    // this probably doesn't work in Electron using build tools which patch
    // global.require()
    // @ts-ignore 
    if (globalThis.TextEncoder == null) globalThis.TextEncoder = globalThis.require("util").TextEncoder
    // @ts-ignore
    if (globalThis.TextDecoder == null) globalThis.TextDecoder = globalThis.require("util").TextDecoder
}

export { Reader } from "./reader"
export { Writer } from "./writer"