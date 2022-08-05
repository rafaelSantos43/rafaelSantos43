import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import './home.css'

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <SideBar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}