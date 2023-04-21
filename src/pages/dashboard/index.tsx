import { useContext, useEffect, useState } from "react";
import * as socketIO from 'socket.io-client';
import { SocketContext } from "../../context/socket";

const Dashboard = () => {
    const [numberOfBlueClick, setNumberOfBlueClick] = useState(0)
    const [numberOfOrangeClick, setNumberOfOrangeClick] = useState(0)
    const socket = useContext(SocketContext);

    useEffect(() => {
        console.log(socket, "here123")
        socket.connect();
        socket.on('orange', (data: number) => {
            console.log(data, 'check here')
            setNumberOfOrangeClick(data)
        })
        socket.on('blue', (data: number) => {
            setNumberOfBlueClick(data)
        })
        
    }, [socket])

    return (
        <div>
            <h1>Blue: {numberOfBlueClick}</h1>
            <h1>Orange: {numberOfOrangeClick}</h1>
        </div>
    )
}

export default Dashboard;