import { app, BrowserWindow } from 'electron'
import entries from './entries'

import './public'

const APP_ID = 'WERTM-Template'
// const APP_ICON = 'favicon.ico'

app.disableHardwareAcceleration()
app.setAppUserModelId(APP_ID)
app.once('window-all-closed', () => app.quit())

app.whenReady().then(() => {
	showExampleWindow()
})

function showExampleWindow() {
	const window = new BrowserWindow({
		webPreferences: {
			preload: entries.examplePreload,
			webviewTag: false,
			contextIsolation: true,
			sandbox: false
		},
		show: false,
		paintWhenInitiallyHidden: false,
		// icon: APP_ICON
		// width: 500,
		// height: 500,
	})

	window.loadURL(entries.example).then(() => {
		window.show()
		window.focus()
	})
}
