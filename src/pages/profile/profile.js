import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import './profile.css'

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="/assets/person/img9.jpg" alt="" />
                            <img className="profileUserImg" src="/assets/person/img8.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Dasham</h4>
                            <span className="profileInfoDesc">hello, my friensd</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}