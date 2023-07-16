import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from 'src/components/Heading.js';
import SubHeading from 'src/components/SubHeading.js';
import InputQuery from 'src/components/InputQuery.js';
import SubmitButton from 'src/components/SubmitButton.js';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}

export default App;
