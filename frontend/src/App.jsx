import React, { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:3000/")
      .then((response) => response.text()) // Backend sends plain text, so use .text()
      .then((data) => setMessage(data)) // Set the received text to state
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Frontend-Backend Integration</h1>
      <p>Response from backend: {message}</p>
    </div>
  );
};

export default App;
