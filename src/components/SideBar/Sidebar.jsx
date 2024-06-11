import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo } from '../../assets/constants'
import { Link, Box, Flex, Image, Text } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <Box
        height={"100vh"}
        borderRight={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{base:2, md:4}}
    >
    <Flex direction={"column"} gap={10} w={"full"}>
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"none", md:"block"}}
        cursor={"pointer"} _hover={{ textDecoration: 'none' }}>
            <Flex alignItems={"center"}>
                <Image src="/sanrio-pfp.png" alt="my Logo" boxSize="40px"/>
            {/* <InstagramLogo/> */}
            <Text ml={2} fontWeight="bold">snackventure</Text>
            </Flex>
            
        </Link>

        <Link to={"/"} as={RouterLink} p={2} display={{base:"block", md:"none"}}
        borderRadius={6} cursor={"pointer"} 
        _hover={{bg:"whiteAlpha.200"}}
        w={10}>
            <Image src="/sanrio-pfp.png" alt="my Logo"/>

            {/* <InstagramMobileLogo/> */}
        </Link>
    </Flex>
    </Box>
  )
}

export default Sidebar