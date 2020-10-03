import React, { useState } from "react";
import usePrice from "../hooks/usePrice";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [due, setDue] = useState(0);
  const [distance, setDistance] = useState(0);
  const [consumption, setConsumption] = useState(4.4);
  const price = usePrice();

  const context = {
    due: {
      due,
      setDue
    },
    distance: {
      distance,
      setDistance
    },
    price: {
      price
    },
    consumption: {
      consumption,
      setConsumption
    }
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
