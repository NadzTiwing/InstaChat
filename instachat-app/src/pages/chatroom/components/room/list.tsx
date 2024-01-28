import { useState, useEffect } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
    doc,
    deleteDoc
} from "firebase/firestore";
import { db } from "../../../../firebase";
import { useRoomContext } from "./../../index";

const RoomList = () => {
    const { selectedRoomId, onSelectRoom } = useRoomContext();
    const [list, setList] = useState([]);

    const handleSelectRoom = (roomId: string) => {
        onSelectRoom(roomId);
    }

    const onDeleteRoom = async (roomId: string) => {
        if(confirm("Are you sure you want to delete this room?")) {
            await deleteDoc(doc(db, "room", roomId));
        }
    }

    useEffect(() => {
        const fetchQuery = query(
            collection(db, "room"),
            orderBy("createdAt", "desc"),
            limit(8)
        );

        const unsubscribe = onSnapshot(fetchQuery, (QuerySnapshot) => {
            const fetchedRooms: any = [];
            QuerySnapshot.forEach((doc) => {
                fetchedRooms.push({ ...doc.data(), id: doc.id });
            });
            const sortedRooms = fetchedRooms.sort(
                (a: any, b: any) => b.createdAt - a.createdAt
            );
            setList(sortedRooms);
        });
        
        return () => {
            unsubscribe
        };
    }, [])
    return(
        <ul className="room-list">
            {list.map((room: any) => (
                <li
                key={room.id}
                className={`room ${room.id === selectedRoomId ? "selected" : ""}`} 
                onClick={() => handleSelectRoom(room.id)}
                >
                    <p>{room.name}</p>
                    <button className="remove-room-btn" onClick={()=>onDeleteRoom(room.id)}>&times;</button>
                </li>
            ))}
        </ul>
    )
}

export default RoomList;