import Title from "./Title"
import { Flex, Box, Spacer, Heading } from "@chakra-ui/layout"
import React from "react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { HiOutlineMail } from 'react-icons/hi'

interface TopbarProps {
    title: string
    subTitle: string
}

export default function Topbar(props: TopbarProps) {
    return (
        <Flex>
            <Box p="100">
                <Heading size="md">
                    <Title title={props.title} subTitle={props.subTitle} />
                </Heading>
            </Box>
            <Spacer />
            <Box>
                <Button m="10px" leftIcon={<HiOutlineMail />} colorScheme="teal" variant="solid">
                    Sign Up
                </Button>
                <Button colorScheme="teal">Log in</Button>
            </Box>
        </Flex>


        // <div>
        //      />
        // </div>
    )
}