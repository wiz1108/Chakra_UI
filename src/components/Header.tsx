import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Colors } from "../utils/colors";

const Links = [
  {
    title: "PRICING",
    link: "/pricing",
  },
  {
    title: "LOCATIONS",
    link: "/locations",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const NavLink = ({ link, title }: { link: string; title: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
      color: Colors.mainBlue,
    }}
    href={link}
  >
    <Text>{title}</Text>
  </Link>
);

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={Colors.mainBlue} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Stack display={{ base: "none", md: "block" }} />
          <IconButton
            size="lg"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            color="white"
            bgColor="transparent"
            _hover={{
              bg: "transparent",
              color: "white",
            }}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color="white"
            >
              {Links.map((link, idx) => (
                <NavLink key={idx} link={link.link} title={link.title} />
              ))}
            </HStack>
            <Text color="white">1-855-290-4679</Text>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} color="white">
              {Links.map((link, idx) => (
                <NavLink key={idx} link={link.link} title={link.title} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Header;
