import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import FeedPost from './FeedPost';

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading && [0, 1, 2].map((_, idx) => (
                <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                    <Flex gap={2}>
                        <SkeletonCircle size='10' />
                        <VStack gap={2} alignItems={"flex-start"}>
                            <Skeleton height='10px' width='150px' />
                            <Skeleton height='10px' width='150px' />
                        </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"500px"}>contents wrapped</Box>
                    </Skeleton>
                </VStack>
            ))}

            {!isLoading && (
                <>
                    <FeedPost 
                        img='/img1.jpg'
                        username="mymelody"
                        avatar='/img1-pfp.png'
                    />
                    <FeedPost 
                        img='/img2.jpg'
                        username="kuromi"
                        avatar='/img2-pfp.jpg'
                    />
                    <FeedPost 
                        img='/img3.jpg'
                        username="badtz_maru"
                        avatar='/img3-pfp.jpg'
                    />
                    <FeedPost 
                        img='/img4.jpg'
                        username="hello_kitty"
                        avatar='/img4-pfp.jpg'
                    />
                </>
            )}
        </Container>
    );
}

export default FeedPosts;
