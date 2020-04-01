import React from 'react';
import "../styles/Wrapper.css";

function Wrapper({ children }) {
  return (
      <div className="wrapper">
        { children }    //children here refer to the main and header components
      </div>
  );
}

export default Wrapper;
