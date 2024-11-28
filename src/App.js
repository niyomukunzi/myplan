import React, { useState, useEffect, useContext, createContext } from 'react';

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

const App = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div style={styles.container}>
      <h1>name: Uwimaniduhaye Adeline</h1>
      <h1>class: L5SOD</h1>
      <h1>
        Hooks are special functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have since become an essential part of React development.
      </h1>
      <h1>Count: {count}</h1>
      <button style={styles.button} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={styles.button} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

const Root = () => (
  <CountProvider>
    <App />
  </CountProvider>
);

const styles = {
  container: {
    textAlign: 'center',
    color: '#00796b',
    backgroundColor: '#e0f7fa', /* Sky cyan */
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: '0',
  },
  button: {
    backgroundColor: '#4fc3f7', /* Light cyan */
    border: 'none',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    color: 'white',
  }
};

export default Root;
