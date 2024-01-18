import React, { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
};

const CreateRoomDialog: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [room, setRoom] = useState<string>("");

    const onCreateRoom = () => {
        onClose();
    };

    return(
        <Modal open={isOpen} onClose={onClose} center>
            <section className="create-room-form">
                <label className="create-room-label"> Enter a name of the room: </label>
                <input type="text" className="room-input" value={room} onChange={(evt) => setRoom(evt.target.value)}/>
                <button className="create-room-btn" onClick={()=>onCreateRoom()}>CREATE</button>
            </section>
        </Modal>
    );
}

export default CreateRoomDialog;