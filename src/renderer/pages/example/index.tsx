import { render } from 'react-dom'

// babel-plugin-direct-import optimizes this import
import { List, ListItem, Typography } from '@mui/material'

import './style'

function ExamplePage() {
    return <>
        <Typography variant='h4'>WERTM</Typography>
        <List style={{ width: '200px', margin: '0 auto' }}>
            <ListItem><Typography>- Webpack v5.37</Typography></ListItem>
            <ListItem><Typography>- Electron v17.1.2</Typography></ListItem>
            <ListItem><Typography>- React v17.0.2</Typography></ListItem>
            <ListItem><Typography>- Typescript v4.6.2</Typography></ListItem>
            <ListItem><Typography>- Material UI v5.5.2</Typography></ListItem>
            <ListItem><Typography>- Hot-reloading</Typography></ListItem>
        </List>
        <Typography>Message from preload: {window.preload.helloRenderer}</Typography>
    </>
}

// Render a page in div#main from template.html
render(<ExamplePage/>, document.querySelector('#main'))
