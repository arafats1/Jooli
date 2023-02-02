import styles from './styles.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Jooli?`}</h1>
        <input className={styles.input} placeholder='Username...' />

        <select className={styles.input}>
          <option>-- Select Room --</option>
          <option value='javascript'>Code</option>
          <option value='node'>Football</option>
          <option value='express'>Investments</option>
          <option value='react'>Fifa</option>
        </select>

        <button className='btn btn-secondary' style={{ width: '100%' }}>Join Room</button>
      </div>
    </div>
  );
};

export default Home;