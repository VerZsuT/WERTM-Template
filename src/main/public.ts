import { Notification } from 'electron'
import { publicFunction } from 'emr-bridge/main'
import MainPublic from './MainPublic'

const showNotification: MainPublic['showNotification'] = async (text: string) => {
  if (!Notification.isSupported()) return
    
  const notification = new Notification({
    title: 'Notification',
    body: text
  })

  notification.show()
  await new Promise(resolve => notification.once('click', resolve))
}

publicFunction('showNotification', showNotification)
