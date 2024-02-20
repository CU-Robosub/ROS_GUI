import { createContext, useContext } from "react";
import ROSLIB from "roslib";

const RosContext = createContext(undefined);

export const useRos = () => {
  const contextValue = useContext(RosContext);
  if (contextValue === undefined) {
    throw new Error("useRos must be used within a RosProvider");
  }
  return contextValue;
};

export const RosProvider = ({ children }) => {
  const ros = new ROSLIB.Ros({ url: "ws://10.200.206.120:9090" });

  return <RosContext.Provider value={ros}>{children}</RosContext.Provider>;
};
