interface SidebarProps{
    title?: string
    subTitle?: string
    children?: any
}

export default function Sidebar(props: SidebarProps){
    return (
        <aside>
            <h1>Menu</h1>
        </aside>
    )
}