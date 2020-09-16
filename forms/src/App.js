import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Results from "./components/results";

const App = () => {
  return (
    <div className="container">
      <h1 className="display-4">Hook Form</h1>
      <Form />
      <Results />
    </div>
  );
};

export default App;