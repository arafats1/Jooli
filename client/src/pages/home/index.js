import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom'; 

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
    }
      // Redirect to /chat route.
      navigate('/chat', { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Jooli?`}</h1>
        <input className={styles.input} placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />

        <select className={styles.input} onChange={(e) => setRoom(e.target.value)}>
          <option>-- Select Room --</option>
          <option value='javascript'>Code</option>
          <option value='node'>Football</option>
          <option value='express'>Investments</option>
          <option value='react'>Fifa</option>
        </select>

        <button className='btn btn-secondary' style={{ width: '100%' }} onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default Home;