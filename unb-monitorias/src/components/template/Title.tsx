import Sidebar from "./Slidebar";

interface TitleProps{
    title: string
    subTitle: string
    children?: any

}

export default function Title(props: TitleProps){
    return (
        <div>
           <h1>{props.title}</h1>
           <h2>{props.subTitle}</h2>
        </div>
    )
}