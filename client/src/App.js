import { useState } from "react";
import "./App.css";
import { DisplayTable } from "./components/DisplayTable";
import { Home } from "./components/Home";

function App() {
  const [data, setData] = useState(undefined);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Home
        setData={setData}
        isLoggedin={isLoggedin}
        setIsLoggedIn={setIsLoggedIn}
      />
      <DisplayTable data={data} setData={setData} isLoggedin={isLoggedin} />
    </div>
  );
}

export default App;
