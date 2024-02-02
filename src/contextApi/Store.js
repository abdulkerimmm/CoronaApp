import React, { useState } from "react";

export const context1 = React.createContext();

export const Store = ({ children }) => {
  const [key, setKey] = useState(1);
  console.log("key", key);

  return (
    <context1.Provider value={[key, setKey]}>
      <div>{children}</div>
    </context1.Provider>
  );
};
