import React from "react";
import PageHeader from "components/PageHeader";
import Home from "pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PageHeader title="React-Teave" />
      {/* Add router here if needed */}

      <Home />
    </div>
  );
}

export default App;
