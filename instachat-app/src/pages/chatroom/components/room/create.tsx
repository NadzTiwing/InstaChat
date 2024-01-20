import { useState } from "react";
import CreateRoomDialog from "./createRoomDialog";
const CreateRoom = () => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return(
    <>
        <button className="create-room" onClick={()=>setOpenModal(true)}>
            Create Room
        </button>
        <CreateRoomDialog isOpen={isOpenModal} onClose={handleCloseModal} />
    </>
)
}

export default CreateRoom;