import React, { useState } from 'react'
import { Box, Button, Grommet, Heading } from 'grommet'
import { Notification } from 'grommet-icons'

const theme = {
    global: {
        colors: {
            brand: '#FF1492',
        },
        font: {
            family: 'Roboto',
            size: '20px',
            height: '20px',
        },
    },
};

const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
)

const App = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <Grommet theme={theme} full>
            <Box fill>
                <AppBar>
                    <Heading level='2' margin='none'>memeTing</Heading>
                    <Button 
                        icon={<Notification />}
                        onClick={() => setShowSidebar(!showSidebar)}
                    />
                </AppBar>
                <Box direction='row' flex overflow={{ horizontal: 'hidden'}}>
                    <Box flex align='center' justify='center'>
                        app body
                    </Box>
                    {showSidebar && (
                        <Box
                            width='small'
                            background='light-2'
                            elevation='small'
                            align='center'
                            justify='center'
                        >
                            sidebar
                        </Box>
                    )}
                </Box>
            </Box>
        </Grommet>
    );
}

export default App;
