import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useReducer } from "react";
import AcountReducer from "./AcountReducers";

export const AcountContext = createContext();

const AcountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AcountReducer, { acounts: [] });
  return (
    <AcountContext.Provider value={{ state, dispatch }}>
      {children}
    </AcountContext.Provider>
  );
};

export default AcountContextProvider;

const styles = StyleSheet.create({});
