import { useState, useEffect } from 'react';
import * as socketIO from 'socket.io-client';

// Use socket to fetch request to data 
// Socket server's url and topic in which data is sent
export const useSocket = (serverUrl: string) => {
    const [isConnected, setConnected] = useState(false);
    const [socket, setSocket] = useState<socketIO.Socket | null>(null)
    console.log(socket, "socket check ")

    useEffect(() => {
        if (socket === null) {
            const _socket = socketIO.io(serverUrl);
            setSocket(_socket);
        }
        socket?.on("connect", () => setConnected(true));
        socket?.on("disconnect", () => setConnected(false));
        return () => { socket?.disconnect() }
    }, [serverUrl]);

    return { isConnected, socket };
}