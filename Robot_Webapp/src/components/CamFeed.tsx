import { useState, useEffect, Fragment } from "react";

const CamFeed = () => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // WebSocket connection setup
    const socket = new WebSocket("wss://localhost:8080");

    // Handle incoming messages
    socket.onmessage = (event) => {
      const data = event.data;
      setImageData(data);
    };
    // Handle errors
    socket.onerror = (event) => {
      setError("An error occurred with the WebSocket connection.");
    };

    // Handle connection closure
    socket.onclose = (event) => {
      if (!event.wasClean) {
        setError(
          `WebSocket connection closed unexpectedly: ${event.code} ${event.reason}`
        );
      }
    };
    // Clean up the WebSocket connection
    return () => {
      socket.close();
    };
  }, []);

  return (
    <Fragment>
      <p>Camera X</p>
      {imageData && <img src={imageData} alt="Camera Feed" />}
    </Fragment>
  );
};

export default CamFeed;
