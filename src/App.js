import "./App.css";
import img from "./images/upload1.png";
import React, { useRef } from "react";

function App({ onFileSelect }) {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
     onFileSelect(file);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">Add from Excel</div>
        <div className="middle">Add candidate to database</div>
        <div className="container">
          <div className="file-uploader">
            <input
              id="file"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileInput}
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
            <label htmlFor="file">
              <img id="im" src={img} alt="" />
              <p id="name">upload a .xlsx or .xls file here</p>
            </label>
            <p>
              <button
                onClick={(e) => fileInput.current && fileInput.current.click()}
                className="btn"
              >
                Submit
              </button>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
