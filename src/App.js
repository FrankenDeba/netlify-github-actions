import "./App.css";
import { useState } from "react";

function App() {
  const [welcome, setWelcome] = useState(false);
  return (
    <div className="App">
      <h1>React app deployed to netlify with github actions ci/cd</h1>
      <button onClick={() => setWelcome(true)}>Say thank you</button>
      {welcome && <h2>You are welcome!</h2>}
      <p>testing dev 111</p>
    </div>
  );
}

export default App;
