import React, { useState } from "react";
import Sidebar from "./components/SideBar/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  console.log(showSidebar)

  return (
    <div className="App">
      <button onClick={toggleSidebar}>Open Sidebar</button>
      {showSidebar && <Sidebar isOpen={false} onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />}
    </div>
  );
}

export default App;