import { useState, useEffect, Fragment } from "react";
import ROSLIB from "roslib";

function ROStest() {
  const [connectionStatus, setConnectionStatus] = useState("N/A");

  useEffect(() => {
    const ros = new ROSLIB.Ros({ url: "ws://10.0.0.24:9090" });

    // When the Rosbridge server connects, update the connection status
    ros.on("connection", () => {
      setConnectionStatus("successful");
    });

    // When the Rosbridge server experiences an error, update the connection status
    ros.on("error", (error) => {
      setConnectionStatus(`errored out (${error})`);
    });

    // When the Rosbridge server shuts down, update the connection status
    ros.on("close", () => {
      setConnectionStatus("closed");
    });

    // Cleanup function when the component unmounts
    return () => {
      ros.close();
    };
  }, []);

  return (
    <Fragment>
      <p>Connection: {connectionStatus}</p>
    </Fragment>
  );
}

export default ROStest;
