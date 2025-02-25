import React, { memo } from "react";
import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <Box bg="gray.800" width="full" py={1} mt="auto">
      <Flex justifyContent="center" color="white">
        <Text m="4">© {currentYear} Sieu.Codes. <Box as="span" fontWeight="bold" textShadow="0 0 10px rgba(255, 255, 255, 0.25)">Build bởi Sieu.Codes.🤖 </Box></Text>
      </Flex>
    </Box>
  );
};

export default memo(Footer);
