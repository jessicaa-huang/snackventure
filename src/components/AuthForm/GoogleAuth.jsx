import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'

const GoogleAuth = () => {
  return (
    <>
    <Flex alignItems={"center"} justifyCenter={"center"} cursor={"o=pointer"}>
        <Image src='/google.png' w={5} alt='Google logo'/>
        <Text mx='2' color={'white'}>
            Log in with Google
        </Text>
    </Flex>
    </>

    
  )
}

export default GoogleAuth