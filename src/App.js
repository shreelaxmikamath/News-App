import "./App.css";
import Navbar from "./components/Navbar";
import React,{useState} from "react";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
 const App =()=>{
  const pagesize = 8;
  const api = "e805bbf4a9cb4199b4e73baba697b197";
  const [progress, setProgress] = useState(0);
  
  const setprogress=(progress)=>{
    setProgress(progress)
    }
    return (
      <BrowserRouter>
        {" "}
        {/* Moved BrowserRouter to wrap everything */}
        <Navbar />
        <LoadingBar
        color="#f11946"
        progress={progress}
      />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setprogress={setprogress} api={api} key="general" pagesize={pagesize} category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News setprogress={setprogress} api={api} key="business" pagesize={pagesize} category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News setprogress={setprogress} api={api} key="entertainment" pagesize={pagesize} category="entertainment" />
            }
          />
          <Route
            exact
            path="/health"
            element={<News setprogress={setprogress} api={api} key="health" pagesize={pagesize} category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News setprogress={setprogress} api={api} key="science" pagesize={pagesize} category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News setprogress={setprogress} api={api} key="sports" pagesize={pagesize} category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News setprogress={setprogress} api={api} key="technology" pagesize={pagesize} category="technology" />
            }
          />
        </Routes>
      </BrowserRouter>
    );
}
export default App;