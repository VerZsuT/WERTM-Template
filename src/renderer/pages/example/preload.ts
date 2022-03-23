import { contextBridge } from 'electron'

export interface IPreload {
    helloRenderer: string
}

const preload: IPreload = {
    helloRenderer: 'Hello Renderer!'
}

// Gives access to the preload from the renderer process [window.preload]
contextBridge.exposeInMainWorld('preload', preload)
