import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'
import Selection from './Tools/Selection'
import EnterData from './Tools/EnterData'



const skor = 10;


function App() {
  const [numberOfStory, setnumberOfStory] = useState(5)
  const [enteredData, setenteredData] = useState(1992)

  function handleFromDataChange(e) {
    setenteredData(e.target.value) 
  }

  return (
    <div>
      <hr/>
      Binın kat sayısı: {numberOfStory}
      <Selection
        selectedOption={numberOfStory}
        onChangeSelection={e => setnumberOfStory(e.target.value)}
      /> 
      <hr/>
      Binanın yapım yılı: {enteredData}
      <EnterData
        onChangeData={handleFromDataChange}
        data={enteredData}
      /> 
      <hr/>

    </div>
  );
}

export default App;