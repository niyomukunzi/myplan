import React, { useState, useEffect, useContext, createContext } from 'react';

const UserContext = createContext();

const Manager = () => {
  
  const [name, setName] = useState('');
  
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    console.log('User list updated', users);
  }, [users]);

  
  const handleAddUser = () => {
    setUsers(prevUsers => [...prevUsers, { id: Date.now(), name }]);
    setName('');
   
  };

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div style={styles.container}>
        <h1>Name: NIYOMUKUNZI Esther</h1>
        <h1>Class: L5SOD</h1>
        <p>hooks :are functions that let you use state and other React features in functional components</p>
        <p>useState: A React hook that lets you add state to functional components.</p>

           <p>useEffect: A React hook that lets you perform side effects in functional components.</p>

           <p>useContext: A React hook that lets you use context to pass data through the component tree without passing props manuall</p>

        <button style={styles.button} onClick={handleAddUser}>Add User</button>
        <h1>User Management</h1>
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter user name"
          />
          <button style={styles.button} onClick={handleAddUser}>Add user</button>
        </div>
        <UserList />
      </div>
    </UserContext.Provider>
  );
};

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <ul style={styles.userList}>
      {users.map(user => (
        <li key={user.id} style={styles.userItem}>{user.name}</li>
      ))}
    </ul>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'skyblue',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
  },
  userList: {
    listStyle: 'none',
    padding: 0,
  },
  userItem: {
    padding: '10px',
    backgroundColor: 'skyblue',
    borderRadius: '5px',
    marginBottom: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
};

export default Manager;
