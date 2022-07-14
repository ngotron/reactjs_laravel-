import axios from "axios";
import { useEffect, useState } from "react";

// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

function Statistical() {
  const [statistics, setStatistics] = useState([]);

  //   const [search, setSearch] = useState();
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    await axios
      .get(`http://localhost:8000/api/categories/statistics`)
      .then(({ data }) => {
        setStatistics(data);
      });
  };

  return (
    <>
      <a href="/">Trở về</a>
      <br></br>
      <div className="container">
        <table className="table container">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <td>Name</td>
              <th scope="col">Count</th>
            </tr>
          </thead>
          <tbody>
            {statistics.map((cate) => (
              <tr>
                <td>{cate.id}</td>
                <td>{cate.name}</td>
                <td>{cate.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Statistical;
