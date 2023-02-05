import React, { useState, useRef } from 'react'
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
    Select
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Overlay from "./Overlay";

const CFAiOutlineMail = chakra(MdEmail)
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const validUsernameRegrex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
const validPasswordRegrex = /^(?=.\d)(?=.[!@#$%^&])(?=.[a-z]).{8,}$/;
const validEmailRegrex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
const REGISTER_URL = '/auth/register'

const Register = () => {
    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const { setAuth } = useAuth()
    const location = useLocation();
    const from = location.state?.from || "/home";

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [branch, setBranch] = useState('')
    const [loading, setLoading] = useState(false)
    const [usernameError, setUsernameError] = useState({
        status: false,
        message: "",
    });
    const [passwordError, setPasswordError] = useState({
        status: false,
        message: "",
    })
    const [branchError, setBranchError] = useState({
        status: false,
        message: "",
    })
    const [emailError, setEmailError] = useState({
        status: false,
        message: "",
    })
    const [usernameFocus, setUsernameFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const usernameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()

    const handleShowClick = () => setShowPassword(!showPassword);

    const branchs = ["Computer Science", "Information Technology", "Electronics"]

    const validate = () => {
        let response = true;


        // checking username
        if (!username || !validUsernameRegrex.test(username)) {
            response = false;
            if (!username) {
                setUsernameError({
                    status: true,
                    message: "Username is required"
                })
            }
        }

        // checking password
        if (!password || !validPasswordRegrex.test(password)) {
            response = false;
            if (!password) {
                setPasswordError({
                    status: true,
                    message: "Password is required"
                })
            } else if (!validPasswordRegrex.test(password)) {
                setPasswordError({
                    status: true,
                    message: "Invalid password"
                })
            }
        }

        // checking email
        if (!email || !validEmailRegrex.test(email)) {
            response = false;
            if (!email) {
                setEmailError({
                    status: true,
                    message: "E-mail is required"
                })
            } else if (!validEmailRegrex.test(email)) {
                setEmailError({
                    status: true,
                    message: "Invalid E-mail"
                })
            }
        }

        if (!branch) {
            response = false;
            setBranchError({
                status: true,
                message: "Branch is required",
            })
        }

        return response;
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(`Username = ${username}`)
            console.log(`Email = ${email}`)
            console.log(`Password = ${password}`)
            console.log(`Branch = ${branch}`)
            if (validate()) {
                usernameRef.current.blur()
                passwordRef.current.blur()
                emailRef.current.blur()
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                }, 5000)
            }
            return
            const { data } = await axios.post(
                REGISTER_URL,
                JSON.stringify({ username, password, email }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(data);
            setUsername('')
            setPassword('')
            setEmail('')
            setAuth(
                {
                    accessToken: data.access_token,
                    user: data.user
                }
            )
            navigate(from)
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
                    <Heading color="teal.400">Student Registration</Heading>
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
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Name"
                                            value={username}
                                            onChange={(e) => {
                                                setUsernameError({
                                                    status: false,
                                                    message: ""
                                                })
                                                setUsername(e.target.value)
                                            }}
                                            ref={usernameRef}
                                            onFocus={() => {
                                                setUsernameFocus(true)
                                            }}
                                            onBlur={() => {
                                                setUsernameFocus(false)
                                            }}
                                            autoComplete="off"
                                        />
                                    </InputGroup>
                                    <Text color={'red.400'} fontSize={'sm'} height={5}>
                                        {usernameError.message}
                                    </Text>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CFAiOutlineMail color="gray.300" />}
                                        />
                                        <Input
                                            type="email"
                                            placeholder="Email address"
                                            value={email}
                                            ref={emailRef}
                                            onChange={(e) => {
                                                setEmailError({
                                                    status: false,
                                                    message: ""
                                                })
                                                setEmail(e.target.value)
                                            }}
                                            autoComplete="off"
                                        />
                                    </InputGroup>
                                    {/* Not required */}
                                    {/* <Tooltip label="Username can only contain alphanumeric characters, underscore and dot with length between 8 to 20." isOpen={emailFocus} >
                                    <Box height={0} width={'100%'} />
                                </Tooltip> */}
                                    <Text color={'red.400'} fontSize={'sm'} height={5}>
                                        {emailError.message}
                                    </Text>
                                </FormControl>
                                <FormControl>
                                    <Select placeholder='Select Branch' name='branch' color="gray.500"
                                        value={branch}
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                            setBranch(e.target.value)
                                            setBranchError({
                                                status: false,
                                                message: ""
                                            })
                                        }} >
                                        {branchs.map((branch) => {
                                            return <option value={branch} key={branch}>{branch}</option>
                                        })}
                                    </Select>
                                    <Text color={'red.400'} fontSize={'sm'} height={5}>
                                        {branchError.message}
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
                                                setPasswordError({
                                                    status: false,
                                                    message: ""
                                                })
                                                setPassword(e.target.value)
                                            }}
                                            ref={passwordRef}
                                            onFocus={() => {
                                                setPasswordFocus(true)
                                            }}
                                            onBlur={() => {
                                                setPasswordFocus(false)
                                            }}
                                            autoComplete="off"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <Tooltip label="Password must be atleast of length 8 and contain at least one lowercase letter and one uppercase and one special character and one number." isOpen={passwordFocus} >
                                        <Box height={0} width={'100%'} />
                                    </Tooltip>
                                    <Flex
                                        flexDirection={'row'}
                                        justifyContent="space-between"
                                    >
                                        <Text color={'red.400'} fontSize={'sm'} height={5}>
                                            {passwordError.message}
                                        </Text>
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
                                            Sign Up
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

export default Register