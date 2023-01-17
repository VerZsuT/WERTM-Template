import { createRoot } from 'react-dom/client'

// babel-plugin-direct-import optimizes this import
import { Button, List, ListItem, Typography } from '@mui/material'
import { Bridge } from 'emr-bridge/renderer'
import type MainPublic from 'main/MainPublic'

import './style'

const bridge = Bridge.as<MainPublic>()

function ExamplePage() {
  const textFromPreload = window.preload.textFromPreload

  function showNotification() {
    bridge.showNotification(textFromPreload)
  }

  return <>
    <Typography variant='h4'>WERTM</Typography>
    <List style={{ width: '200px', margin: '0 auto' }}>
      <ListItem><Typography>- Webpack v5.69</Typography></ListItem>
      <ListItem><Typography>- Electron v22.0.2</Typography></ListItem>
      <ListItem><Typography>- Typescript v4.9.4</Typography></ListItem>
      <ListItem><Typography>- React v18.2.0</Typography></ListItem>
      <ListItem><Typography>- Babel v7.20.12</Typography></ListItem>
      <ListItem><Typography>- Material UI v5.11.4</Typography></ListItem>
      <ListItem><Typography>- Electron-Forge v6.0.4</Typography></ListItem>
      <ListItem><Typography>- Hot reload</Typography></ListItem>
    </List>
    <Typography>Message from preload: {textFromPreload}</Typography>
    <Button onClick={showNotification}>
      Show notification
    </Button>
  </>
}

// Render a page in div#main from template.html
createRoot(document.querySelector('#main')!).render(<ExamplePage/>)
