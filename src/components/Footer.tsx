import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../utils/colors";

const Footer: React.FC = () => {
  return (
    <Box
      backgroundColor={Colors.mainBlue}
      py={10}
      px={5}
      alignItems="center"
      justifyContent="center"
      display="flex"
      color="white"
    >
      <Box w={{ md: "75%", sm: "100%" }}>
        <Text fontWeight="bold" textAlign="center">
          About Cremation Basics | Privacy Policy
        </Text>
        <HStack
          fontWeight="bold"
          display={{ sm: "column", md: "flex" }}
          alignItems="center"
          justifyContent="center"
        >
          <Text textAlign="center">E-main: info@cremationbasics.ca</Text>
          <Text display={{ base: "none", md: "block" }}>|</Text>
          <Text textAlign="center">Phone:1-855-290-4679</Text>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="center"
          display={{ sm: "column", md: "flex" }}
        >
          <Text textAlign="center">Toronto License Number: FE-1223</Text>
          <Text display={{ base: "none", md: "block" }}>|</Text>
          <Text textAlign="center">
            Funeral Establishment Operator - Class 1
          </Text>
        </HStack>
        <Text mt={5} fontSize="10px" textAlign="center">
          Copyright © 2022 Cremation Basics Inc. is operated by Arbor Memorial
          Inc.
        </Text>

        <Text fontSize="10px" textAlign="center">
          Single copies of our Internet pages may be downloaded or printed
          solely for personal use. It is otherwise prohibited to modify, copy,
          distribute, transmit, display, perform, reproduce, publish, license,
          create derivative works from, transfer, or sell any information,
          software, products or services obtained from this site.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
