import { useState } from "react";
import CreateRoomDialog from "./createRoomDialog";

const Sidebar = () => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const handleCloseModal = () => {
        setOpenModal(false);
    }
    
    const onLogout = () => {
        
    }

    return(
        <>
        <ul className="room-list">
            <li className="room selected">
                Room one
            </li>
            <li className="room">
                Room two
            </li>
            
        </ul>
        <div className="options">
            <button className="logout" onClick={() => onLogout()}>
                Logout
            </button>
            <button className="create-room" onClick={()=>setOpenModal(true)}>
                Create Room
            </button>
        </div>
        <CreateRoomDialog isOpen={isOpenModal} onClose={handleCloseModal}
        />
        </>
    );
}

export default Sidebar;