import React, { useState, useEffect } from 'react';

import ModalPortal from '../utils/Modal';

import { ModalToggleContainer } from '../styles/ModalToggleStyle';

import { ContainerNumber, DivButton, DivToggle } from '../styles/Fundamental';

const Fundamental = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = `Plus Number of Click : ${increment}`;
  });

  const incrementNumber = () => {
    setIncrement(prevIncrement => prevIncrement + 1);
  };

  const decrementNumber = () => {
    setDecrement(prevDecrement => prevDecrement - 1);
  };

  const normalizeNumber = () => {
    setIncrement(0);
    setDecrement(0);
  };

  const toggleHandler = () => {
    setToggle(prevToggle => !prevToggle);
  };

  const modalOpenHandle = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  return (
    <>
      <ContainerNumber>
        <DivButton>
          <h4>Increment Number</h4>
          <button onClick={incrementNumber}>
            Increment Number : <b>{increment}</b>
          </button>
        </DivButton>

        <DivButton>
          <h4>Decrement Number</h4>
          <button onClick={decrementNumber}>
            Decrement Number : <b>{decrement}</b>
          </button>
        </DivButton>

        <DivButton>
          <h4>Normalize Number</h4>
          <button onClick={normalizeNumber}>Normalize Number</button>
        </DivButton>
      </ContainerNumber>

      <hr />
      <h3>Toggle Button</h3>
      <button onClick={toggleHandler}>Toggle Button</button>
      {toggle && (
        <DivToggle>
          <h1>Hello World</h1>
        </DivToggle>
      )}

      <hr />
      <h3>Modal Button</h3>
      <button onClick={modalOpenHandle}>Click Modal</button>
      {isModalOpen && (
        <ModalPortal>
          <ModalToggleContainer onClick={modalOpenHandle}>
            <h1 style={{ color: 'white' }}>Hello World Modal</h1>
          </ModalToggleContainer>
        </ModalPortal>
      )}
    </>
  );
};

export default Fundamental;
