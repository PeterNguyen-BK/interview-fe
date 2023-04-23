import { useContext } from 'react';
import { SocketContext } from '../../context/socket';

const Client = () => {
    const socket = useContext(SocketContext);
    const handleClickButton = (color: string) => {
        socket.emit(color, 'click')
    }
    return (
        <div>
            <button style={{backgroundColor:'orange', margin: '10px'}} onClick={() => handleClickButton('orange')}>Orange</button>
            <button style={{backgroundColor:'blue', margin: '10px'}} onClick={() => handleClickButton('blue')}>Blue</button>
        </div>
    )
}

export default Client;