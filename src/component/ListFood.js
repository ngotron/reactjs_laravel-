import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

function ListFood() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState();

  //   const [search, setSearch] = useState();
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    await axios.get(`http://localhost:8000/api/foods`).then(({ data }) => {
      setFoods(data);
    });
  };
  const handleSearch = async () => {
    const res = await axios.get(`http://localhost:8000/api/search/${search}`);
    setFoods(res.data);
  };

  return (
    <>
      <a href="/">Trở về</a>
      <br></br>
      <div className="container">
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            name="search"
            placeholder="Search by name..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            name="search"
            placeholder="Search by price..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="row" style={{ gap: 30 }}>
          {foods.length > 0 &&
            foods.map((food, key) => (
              <div key={key} className="card" style={{ width: 412 }}>
                <img
                  className="card-img-top"
                  src={`http://localhost:8000/image/${food.image}`}
                />
                <div class="card-body">
                  <h5 class="card-title ">{food.name}</h5>
                  <p class="card-text">{food.price}</p>
                  <a href="" class="btn btn-primary">
                    Chi tết
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ListFood;
