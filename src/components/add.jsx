import { Navbar } from "./Navbar";
import axios from "axios";
import { useState } from "react";
export const Add = () => {
  const [type, setType] = useState([]);
  const [number, setNumber] = useState([]);
  const [image, setImg] = useState([]);
  // const addFlat = (event) => {
  //   event.preventDefault();
  //   console.log("ok");
  // };

  async function addFlat(event) {
    event.preventDefault();
    axios.post("http://localhost:1234/api/addflat", {
      type,
      number,
      image,
    });
  }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <form onSubmit={addFlat} className="m-auto w-25 " novalidate>
        <label className="m-auto form-label">
          <h5>Type</h5>
        </label>
        <input
          type="text"
          className=" form-control m-auto "
          id="validationCustom01"
          onChange={(e) => setType(e.target.value)}
          required
        />
        <br />
        <label className="m-auto">
          <h5>Number</h5>
        </label>
        <input
          // value={number}
          type="text"
          className=" form-control m-auto "
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <label className="m-auto">
          <h5>Image</h5>
        </label>
        <input
          // value={image}
          type="text"
          className=" form-control m-auto "
          onChange={(e) => setImg(e.target.value)}
        />
        <br />
        <button className="btn btn-outline-success">Add-Flat</button>
      </form>
    </div>
  );
};
