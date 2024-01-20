import React, { useState } from "react";
import { db } from "../../../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Modal } from 'react-responsive-modal';
import { INewRoomModal } from "../../../../types";
import 'react-responsive-modal/styles.css';

const CreateRoomDialog: React.FC<INewRoomModal> = ({ isOpen, onClose }) => {
    const [room, setRoom] = useState<string>("");

    const onCreateRoom = async () => {
        if (room.trim() === "") {
            alert("Enter a room's name");
            return;
        } else if (room.trim().length > 25) {
            alert("The name is too long.");
            return;
        }

        await addDoc(collection(db, "room"), {
            name: room,
            createdAt: serverTimestamp(),
        });

        setRoom("");
        onClose();
    };

    return(
        <Modal open={isOpen} onClose={onClose} center>
            <section className="create-room-form">
                <div className="label-section">
                    <label className="create-room-label"> Name of the Room: 
                    <p>(Enter only less than 25 characters)</p>
                    </label>
                </div>
                <input type="text" className="room-input" value={room} onChange={(evt) => setRoom(evt.target.value)}/>
                <button className="create-room-btn" onClick={()=>onCreateRoom()}>CREATE</button>
            </section>
        </Modal>
    );
}

export default CreateRoomDialog;