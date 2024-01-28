import { createContext, useContext, useState } from "react";
import Sidebar from "./components/sidebar";
import ChatBox from "./components/chatbox";
import './style/index.css';
import { IRoomContext } from "./../../types";

const RoomContext = createContext<IRoomContext | undefined>(undefined);

const ChatRoom = () => {
    const [selectedRoomId, setSelectedRoomId] = useState('');
    const [isShowMenu, setShowMenu] = useState<boolean>(false);
  
    const onSelectRoom = (room: string) => {
        setSelectedRoomId(room);
    };

    return(
        <RoomContext.Provider value={{ selectedRoomId, onSelectRoom }}>
            <main className="chatroom">
                <aside className={isShowMenu ? 'sidebar show-menu' : 'sidebar'}>
                    <Sidebar />
                </aside>
                <section className="chatbox">
                    <button className='burger-menu' onClick={()=> setShowMenu(!isShowMenu)}>
                        {isShowMenu ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> }
                    </button>
                    <ChatBox />
                </section> 
            </main>
        </RoomContext.Provider>
    )
};

const useRoomContext = () => {
    const context = useContext(RoomContext);
    if (!context) {
      throw new Error('RoomContext must be used within a RoomContextProvider');
    }
    return context;
  };

export { ChatRoom, RoomContext, useRoomContext };