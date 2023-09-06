import React, { useState } from "react";
import AppContext from "./ContextApp";

const ContextProvider = (props) => {
  const [logInBoxOpen, setLogInBoxOpen] = useState(false);
  const handleClose = () => {
    setLogInBoxOpen(false);
  };

  return (
    <AppContext.Provider value={{ logInBoxOpen, setLogInBoxOpen, handleClose }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
