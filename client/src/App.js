import { useState } from "react";
import "./App.css";
import { DisplayTable } from "./components/DisplayTable";
import { Home } from "./components/Home";

function App() {
  const [data, setData] = useState(undefined);

  return (
    <div className="App">
      <Home setData={setData} />
      <DisplayTable data={data} />
    </div>
  );
}

export default App;
