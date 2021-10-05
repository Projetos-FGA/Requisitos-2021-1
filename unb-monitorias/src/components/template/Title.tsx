import { Text } from "@chakra-ui/layout"

interface TitleProps{
    title: string
    subTitle: string
}

export default function Title(props: TitleProps){
    return (
        <Text>
           <h1>{props.title}</h1>
           <h2>{props.subTitle}</h2>
        </Text>
    )
}