import { useState } from 'react';
import SquareForm from '../SquareForm/SquareForm';
import SquareList from '../SquareList/SquareList';

const App = () => {
  const [squares, setSquares] = useState([]);

  const addSquare = (newSquare) => {
    setSquares(prevSquares => [...prevSquares, newSquare]);
  }

  const clearSquares = () => {
    setSquares([]);
  }

  return (
    <div className='App'>
      <div className='main-header-container'>
        <h1 id='main-header'>
          Square Generator
        </h1>
      </div>
      <SquareForm
        addSquare={addSquare}
        clearSquares={clearSquares}
      />
      <SquareList
        squares={squares}
        setSquares={setSquares}
      />
    </div>
  );
}

export default App;
