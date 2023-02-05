import React, { useState, useRef } from 'react'
import axios from "./../api/axios"
import "../CSS/Login.css";
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
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
    Select
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Overlay from "./Overlay";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const LOGIN_URL = "/login/"
const validEmailRegrex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

const Login = () => {
    const { setAuth } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [emailerror, setEmailerror] = useState({
        status: false,
        message: "",
    });
    const [passwordError, setPasswordError] = useState({
        status: false,
        message: "",
    })
    const [email, setEmail] = useState('');
    const usernameRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/protected"; // this is page from where we were redirected here and state will be only defined if while redirecting we set state to state={{ from: location }}
    console.log(from)


    const validate = () => {
        let response = true;

        // checking password
        if (!password) {
            response = false;
            setPasswordError({
                status: true,
                message: "Password is required"
            })
        }

        // checking email
        if (!email || !validEmailRegrex.test(email)) {
            response = false;
            if (!email) {
                setEmailerror({
                    status: true,
                    message: "E-mail is required"
                })
            } else if (!validEmailRegrex.test(email)) {
                setEmailerror({
                    status: true,
                    message: "Invalid E-mail"
                })
            }
        }

        return response;
    }

    const handleShowClick = () => setShowPassword(!showPassword);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        // if (!validate())
        //     return;
        try {
            console.log(email)
            console.log(password)
            const { data } = await axios.post(
                LOGIN_URL,
                { 'email': email, 'password': password },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            )
            console.log(data)
            const { details } = data;
            // return
            setAuth({ user: details.user, accessToken: details.access_token, access: details.access })
            setUsername("");
            setPassword("");
            navigate('/dashboard', { replace: true });
        } catch (e) {
            console.log(e.response)
            // setError({ status: true, message: e?.response?.data?.error || "Server Error" })
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
                background={'#30918F'}
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* <Avatar bg="teal.500" /> */}
                    <Heading color="teal.400">Welcome</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={handleSubmit} noValidate >
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            autoComplete="off"
                                            onChange={
                                                (e) => {
                                                    setEmail(e.target.value)
                                                    setEmailerror({
                                                        status: false,
                                                        message: ""
                                                    })
                                                    // setUsername(e.target.value)
                                                    // setUsernameError({ status: false, message: "" })
                                                }
                                            }
                                        // ref={MdAlternateEmail}
                                        />
                                    </InputGroup>
                                    <Text color={'red.400'} fontSize={'sm'} height={5}>
                                        {emailerror.message}
                                    </Text>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                            children={<CFaLock color="gray.300" />}
                                        />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                                setPasswordError({ status: false, message: "" })
                                            }}
                                            ref={passwordRef}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    {/* <Tooltip label="Password must be atleast of length 8 and contain at least one lowercase letter and one uppercase and one special character and one number." isOpen={passwordFocus} >
                                        <Box height={0} width={'100%'} />
                                    </Tooltip> */}
                                    <Flex
                                        flexDirection={'row'}
                                        justifyContent="space-between"
                                    >
                                        <Text color={'red.400'} fontSize={'sm'} height={5}>
                                            {passwordError.message}
                                        </Text>
                                        <FormHelperText textAlign="right">
                                            <Link>forgot password?</Link>
                                        </FormHelperText>
                                    </Flex>
                                </FormControl>
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
                                        >
                                            Log in
                                        </Button>
                                }
                            </Stack>
                        </form>
                    </Box>
                </Stack>
                <Box>
                    New to us?{" "}
                    <Link color="teal.500" href="/register">
                        Sign Up
                    </Link>
                </Box>
            </Flex>
        </>
    );
}

export default Login