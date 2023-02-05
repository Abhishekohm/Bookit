import React, { useEffect } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { Button } from '@chakra-ui/react'

const Protected = () => {
    const axiosPrivate = useAxiosPrivate()
    const getData = async () => {
        const { data } = await axiosPrivate.get('/auth/private')
        console.log(data)
    }


    useEffect(() => {
        getData()
    })
    return (
        <div>
            Protected {" "}
            <Button onClick={() => getData()} colorScheme={'blue'} color={'black'} >Request</Button>
        </div>
    )
}

export default Protected