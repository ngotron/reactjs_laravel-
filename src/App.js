import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ListFood from "./component/ListFood";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                {/* <Link to={"/addcar"} className="nav-link">
                AddCar
              </Link> */}
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<ListFood />} />
            {/* <Route path="/addcar" element={<AddCar />} />
          <Route path="/cars/edit/:id" element={<Edit />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
