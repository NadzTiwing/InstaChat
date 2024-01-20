
import { auth } from "./../../../firebase";
import CreateRoom from "./room/create";
import RoomList from "./room/list";

const Sidebar = () => {
    const onLogout = () => {
        auth.signOut();
    }

    return(
        <>
        <RoomList />
        <div className="options">
            <button className="logout" onClick={() => onLogout()}>
                Logout
            </button>
            <CreateRoom />
        </div>
        </>
    );
}

export default Sidebar;