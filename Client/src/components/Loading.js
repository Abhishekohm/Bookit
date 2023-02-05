import React from 'react'
import { Spinner, Center } from '@chakra-ui/react'
const Loading = () => {
    return (
        <>
            <Center marginTop="100"><Spinner size='xl' /></Center>
        </>
    )
}

export default Loading