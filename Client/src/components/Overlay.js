import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'

const Overlay = () => {
    useEffect(() => {
        console.log("Mounting")
        return () => {
            console.log("Unmounting")
        }
    })
    return (
        <Box position={'fixed'} top={0} right={0} height={'100vh'} width={'100vw'} zIndex={10} ></Box>
    )
}

export default Overlay