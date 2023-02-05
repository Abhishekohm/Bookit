import React, { ReactNode, useState } from "react";
import { DragHandleIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  Link as ReachLink,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiPlus,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiCheckSquare,
  FiClock,
  FiLogOut,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import PendingEventsCommunity from "./PendingEventsCommunity";
import ApprovedEventsCommunity from "./ApprovedEventsCommunity";
import { Link } from "react-router-dom";

export default function SideBar_Header({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pendingtab, setPendingtab] = useState(true);
  const [approvedtab, setApprovedtab] = useState(false);
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        setApprovedtab={setApprovedtab}
        setPendingtab={setPendingtab}
        approvedtab={approvedtab}
        pendingtab={pendingtab}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}

        {approvedtab && <ApprovedEventsCommunity />}
        {pendingtab && <PendingEventsCommunity />}
      </Box>
    </Box>
  );
}

const SidebarContent = ({
  onClose,
  setApprovedtab,
  setPendingtab,
  approvedtab,
  pendingtab,
  ...rest
}) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <DragHandleIcon />
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Book-It
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <NavItem
        icon={FiClock}
        onClick={() => {
          setPendingtab(true);
          setApprovedtab(false);
        }}
      >
        {"Pending"}
      </NavItem>
      <NavItem
        icon={FiCheckSquare}
        onClick={(e) => {
          setApprovedtab(true);
          setPendingtab(false);
        }}
      >
        {"Approved"}
      </NavItem>
      <NavItem icon={FiPlus}>
        <Link href="/events/create" >
          Create Event
        </Link>
      </NavItem>
      <NavItem icon={FiLogOut}>{"Logout"}</NavItem>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "teal.500",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="lg">Community of Coders</Text>
                </VStack>
              </HStack>
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
