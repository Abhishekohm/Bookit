import React, { useState, useRef, useEffect } from 'react'
import axios from '../api/axios'
import { useNavigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Text,
    Tooltip,
    Select,
    Textarea,
    Checkbox,
    HStack
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Overlay from "./Overlay";

const CFAiOutlineMail = chakra(MdEmail)
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const validUsernameRegrex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
const validPasswordRegrex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
const validEmailRegrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const REGISTER_URL = '/auth/register'

const CreateEventForm = () => {
    let navigate = useNavigate();
    const { setAuth } = useAuth()
    const location = useLocation();
    const from = location.state?.from || "/home";
    const [loading, setLoading] = useState(false);

    // form states
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        capacity: '',
        isLab: false,
        hasProjector: false,
        venue_id: "",
        slot_id: "",
    })


    // const venue_example = {
    //     venue_id,
    //     venue_capacity,
    //     venue_name
    // }

    const [venues, setVenues] = useState({
        queried: false,
        data: [
            // {
            //     venue_id: "id1",
            //     venue_capacity: '200',
            //     venue_name: 'MSH'
            // },
            // {
            //     venue_id: "id2",
            //     venue_capacity: '250',
            //     venue_name: 'AL004'
            // }
        ]
    })

    // {
    //     slot_id: "id1",
    //     slot_start: "9",
    //     slot_end: "12"
    // },

    const [slots, setSlots] = useState({
        queried: false,
        data: [
            // {
            //     slot_id: "id1",
            //     slot_start: "9",
            //     slot_end: "12"
            // },
            // {
            //     slot_id: "id2",
            //     slot_start: "1",
            //     slot_end: "4"
            // }
        ]
    })

    useEffect(() => {
        console.log(formData)
    }, [formData])


    const branchs = ["Computer Science", "Information Technology", "Electronics"]

    const handleSubmit = async (e) => {
        console.log("here")
        e.preventDefault()
        try {
            console.log(parseInt(formData.capacity))
            console.log(formData.isLab)
            console.log(formData.hasProjector)
            console.log(venues.queried)
            if (parseInt(formData.capacity) && formData.isLab && formData.hasProjector && !venues.queried) {
                console.log("here1")
                const endpoint = '/events/room';
                const { data } = await axios.get(
                    endpoint,
                    {
                        capacity: formData.capacity,
                        isLab: formData.isLab,
                        hasProjector: formData.hasProjector
                    }
                )
                console.log(data)
                return;

            }
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <>
            {loading && <Overlay />}
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* <Avatar bg="teal.500" /> */}
                    <Heading color="teal.400">Create Event</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={handleSubmit} noValidate>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <FormControl>
                                    <InputGroup>
                                        <Input
                                            type={"text"}
                                            placeholder="Title"
                                            value={formData.title}
                                            onChange={(e) => {
                                                setFormData(() => {
                                                    return {
                                                        ...formData,
                                                        "title": e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <Textarea
                                        type={"text"}
                                        placeholder="Description"
                                        value={formData.description}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                "description": e.target.value
                                            })
                                        }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Input
                                        type={"number"}
                                        placeholder="Expected no. of students"
                                        value={formData.capacity}
                                        onChange={(e) => {
                                            setFormData(() => {
                                                return {
                                                    ...formData,
                                                    "capacity": e.target.value
                                                }
                                            })
                                        }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <HStack spacing={"10px"}>
                                        <Checkbox
                                            name="lab_required"
                                            color="teal.500"
                                            checked={formData.is_lab}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    'is_lab': !formData.is_lab
                                                })
                                            }}
                                        >
                                            Lab requried {" "}
                                        </Checkbox>
                                        <Checkbox
                                            name="Projector Required"
                                            color="teal.500"
                                            checked={formData.has_projector}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    'has_projector': !formData.has_projector
                                                })
                                            }}
                                        >
                                            Projector Required
                                        </Checkbox>
                                    </HStack>
                                </FormControl>
                                {/* query matching venues and them populate this drop down */}


                                {
                                    venues.queried &&
                                    (
                                        venues.data.length
                                            ?
                                            <FormControl>
                                                <Text fontSize={'md'} color="teal.500"></Text>
                                                <Select
                                                    color="teal.500"
                                                    onChange={(e) => {
                                                        setFormData({
                                                            ...formData,
                                                            'venue_id': e.target.value
                                                        })
                                                    }}
                                                    placeholder={"Venues available"}
                                                >
                                                    {
                                                        venues.data.map((venue) => {
                                                            return <option value={venue.venue_id}>
                                                                {venue.venue_name}{" "}{`(${venue.venue_capacity})`}
                                                            </option>
                                                        })
                                                    }
                                                </Select>
                                            </FormControl>
                                            :
                                            <Text fontSize='lg'>No venues available</Text>
                                    )
                                }


                                {
                                    slots.queried &&
                                    (
                                        slots.data.length
                                            ?
                                            <FormControl>
                                                <Select
                                                    placeholder='Slots available'
                                                    color="teal.500"
                                                    onChange={(e) => {
                                                        setFormData({
                                                            ...formData,
                                                            'slot_id': e.target.value
                                                        })
                                                    }}
                                                >
                                                    {
                                                        slots.data.map((slot) => {
                                                            return <option value={slot.slot_id}>
                                                                {slot.slot_start}{" to "}{slot.slot_end}
                                                            </option>
                                                        })
                                                    }
                                                </Select>
                                            </FormControl>
                                            :
                                            <Text fontSize='lg'>No slots available</Text>

                                    )
                                }

                                {
                                    loading ?
                                        <Button
                                            borderRadius={0}
                                            type="submit"
                                            variant="solid"
                                            colorScheme="teal"
                                            width="full"
                                            disabled={true}
                                        >
                                            Loading...
                                        </Button>
                                        :
                                        <Button
                                            borderRadius={0}
                                            type="submit"
                                            variant="solid"
                                            colorScheme="teal"
                                            width="full"
                                            disabled={venues.data}
                                        >
                                            Create Event
                                        </Button>
                                }
                            </Stack>
                        </form>
                    </Box>
                </Stack>
                <Box>
                    Already have an account?{" "}
                    <Link color="teal.500" href="/login">
                        Sign In
                    </Link>
                </Box>
            </Flex>
        </>
    );
}

export default CreateEventForm;
