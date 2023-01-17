import { contextBridge } from 'electron'
import { provideFromMain } from 'emr-bridge/preload'

provideFromMain()

export interface IPreload {
  textFromPreload: string
}

const preload: IPreload = {
  textFromPreload: 'Hello from preload!'
}

contextBridge.exposeInMainWorld('preload', preload)
