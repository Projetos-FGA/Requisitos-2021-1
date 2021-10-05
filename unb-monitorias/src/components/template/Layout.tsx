import Sidebar from "./Slidebar"
import Topbar from "./Topbar"
import Inside from "./Inside"

interface LayoutProps{
    title: string
    subTitle: string
    children?: any
}

export default function Layout(props: LayoutProps){
    return (
        <div>
            <Sidebar />
            <Topbar title={props.title} subTitle={props.subTitle} />
            <Inside>
                {props.children}
            </Inside>
        </div>
    )
}