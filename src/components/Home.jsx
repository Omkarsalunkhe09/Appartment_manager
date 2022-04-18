import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "./Navbar";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1234/api/addflat").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <table className="table w-75 m-auto mt-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Type</th>
            <th scope="col">Number</th>
            <th scope="col">Images</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e._id} className="houseDetails">
                <td>{e._id}</td>
                <td>{e.type} </td>
                <td>{e.number}</td>
                <td>
                  <img src={e.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
