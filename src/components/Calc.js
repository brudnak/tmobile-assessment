import React, { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 800px;
  margin: auto;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    input {
      margin-top: 20px;
      font-size: 1.6rem;
      width: 50%;
      padding: 4px;
    }
    input:nth-of-type(1) {
      margin-top: 80px;
    }
    button {
      padding: 10px 30px;
      background-color: #666;
      border-radius: 10px;
      border: unset;
      margin-top: 20px;
      font-size: 1.8rem;
      color: #f2f7ff;
      text-transform: uppercase;
      box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
    button:active {
      box-shadow: unset;
      font-size: 1.6rem;
    }
    button:hover {
      background-color: #fff;
      color: #e20074;
    }
    button:focus {
      outline: 0;
    }
  }
`;


 




  

const CalcCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e20074;
  color: #f2f7ff;
  margin: 20px;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
  h1 {
      text-align: center;
    font-weight: bold;
    align-items: center;
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
    margin-top: 6%;
  }
`;



const MainContent = styled.div`
`;


const Calc = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);

    function calculateTotal() {
        setTotal(number1 + number2);
      }
  



  return (
    <CalcCard>
      <MainContent>
        <h1>Add Two Numbers</h1>
        <br></br>
        <h1>Total: {total}</h1>
        <Wrapper>
      <div >
      <input
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
          placeholder="0"
        />

<button onClick={calculateTotal}>Add Them!</button>
      </div>

    </Wrapper>
      </MainContent>
    </CalcCard>
  );
};


export default Calc;