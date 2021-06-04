import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState("");
  const [url, setUrl] = useState("");
  const [reg, setReg] = useState("");
  const [filtered, setFiltered] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const regex = new RegExp(reg);
      const matches = data.filter((link) => regex.test(link));
      setFiltered(matches);
    }
  }, [reg, data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/api", {
        url: url,
      })
      .then(({ data }) => {
        setIsLoading(false);
        setData(data.sites);
        setShowTable(true);
      });
  };
  return (
    <div className="App container">
      <Navbar />
      <div className="container">
        <form
          className="d-flex justify-content-center mt-5"
          onSubmit={handleSubmit}
        >
          <div className="input-group mb-3">
            <input
              type="url"
              className="form-control"
              placeholder="Enter XML sitemap URL..."
              aria-label="Enter XML sitemap URL..."
              aria-describedby="button-addon2"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              className="btn bg-danger text-white"
              type="submit"
              value="Submit"
              id="button-addon2"
            >
              Submit
            </button>
          </div>
        </form>
        <br />
        <div className="input-group mb-5">
          <span className="input-group-text bg-light" id="basic-addon1">
            ([A-Z])\w+
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter regex..."
            aria-label="Enter regex..."
            aria-describedby="basic-addon1"
            value={reg}
            onChange={(e) => setReg(e.target.value)}
          />
        </div>
      </div>
      {isLoading ? <Loading /> : null}
      {showTable ? <Table links={filtered} /> : null}
    </div>
  );
}

export default App;
