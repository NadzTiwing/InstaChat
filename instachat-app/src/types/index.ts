import { RefObject } from 'react';

export interface IFirebaseConfig {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string
}

export interface IMessage {
    id: string,
    uid: string,
    avatar: string,
    name: string,
    text: string
}

export interface IMessageProps {
    details: IMessage
}

export interface INewRoomModal {
    isOpen: boolean,
    onClose: () => void
};

export interface ISendMessageProps {
    scroll: RefObject<HTMLSpanElement>,
    room: string
}

export interface IRoomContext {
    selectedRoomId: string,
    onSelectRoom: (roomId: string) => void
}