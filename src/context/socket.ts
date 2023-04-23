import * as socketio from "socket.io-client";
import * as React from 'react';

export const socket = socketio.io('http://localhost:4000');
export const SocketContext = React.createContext(socket);