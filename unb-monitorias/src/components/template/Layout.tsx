import { Flex, Box, Center, Text, Square } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Inside from "./Inside";

interface LayoutProps{
    title: string
    subTitle: string
    children?: any
}

export default function Layout(props: LayoutProps){
    return (
        
        <Flex color="white">
            <Center w="80px" bg="blue.400">
                <Sidebar />
            </Center>
            <Box direction="column" w="100%">
                <Box p={5} shadow="md" borderWidth="5px" direction="column" bg="black">
                    <Topbar title={props.title} subTitle={props.subTitle} /> 
                </Box>
                <Box direction="column" bg="green.400">
                    <Inside>
                        {props.children}
                    </Inside>
                </Box>
            </Box>
        </Flex>
    )
} 

