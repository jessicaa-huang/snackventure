import { Container } from '@chakra-ui/react'
import React from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
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
    </Container>
  )
}

export default FeedPosts