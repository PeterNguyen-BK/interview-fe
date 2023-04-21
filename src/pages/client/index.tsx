import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../../context/socket';

const Client = () => {
    const socket = useContext(SocketContext);
    const handleClickButton = (color: string) => {
        console.log(socket)
        socket?.emit(color, 'click')
    }
    const navigate = useNavigate();
    return (
        <div>
            <button style={{backgroundColor:'orange', margin: '10px'}} onClick={() => handleClickButton('orange')}>Orange</button>
            <button style={{backgroundColor:'blue', margin: '10px'}} onClick={() => handleClickButton('blue')}>Blue</button>
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        </div>
    )
}

export default Client;