import React from "react";
import myNotes from "./createArea";
import { notes } from "../Data/notes";
const Notes = () => {
  const data = JSON.parse(localStorage.getItem("localNotes"));

  console.log("localS", data);
  return (
    <div>
      {data.map((item, i) => (
        <ul key={item[i]}>
          <li>Title:{item.title}</li>
          <li>Body:{item.content}</li>
        </ul>
      ))}

      <h1>Title</h1>
      <p>Content</p>
      <button>Delete</button>
    </div>
  );
};

export default Notes;
