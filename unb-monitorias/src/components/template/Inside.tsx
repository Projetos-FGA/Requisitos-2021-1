import { Flex } from "@chakra-ui/layout"

interface InsideProps{
    children?: any
}

export default function Content(props: InsideProps){
    return (
        <Flex mt={7}>

           <h1>{props.children}</h1>
           
        </Flex>
    )
}