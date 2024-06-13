import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.400"} cursor={"pointer"}>
            See All
          </Text>
        </Flex>

        <SuggestedUser name="gudetama" followers={2340} avatar='/gudetama-pfp.png'/>
        <SuggestedUser name="pompompurin" followers={1245} avatar='/pompompurin-pfp.jpg'/>
        <SuggestedUser name="chococat" followers={560} avatar='/chococat-pfp.jpg'/>
        <SuggestedUser name="pochacco" followers={5648} avatar='/pochacco-pfp.jpg'/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
          built by{" "}
          <Link href='https://jessicahuang.typedream.app/' target='_blank' color='blue.300' fontSize={12}>
            jessica huang
          </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers