import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import { useSelector } from "react-redux";
import { SimpleGrid } from "@chakra-ui/react";
const Notes = () => {
  // const data = JSON.parse(localStorage.getItem("localNotes"));

  const myNotes = useSelector((state) => state.keep.notes);
  let reversedOrder = [...myNotes].reverse();

  return (
    <div>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {reversedOrder?.map((item, i) => (
          <>
            {" "}
            <NoteCard item={item} />
          </>
        ))}
      </SimpleGrid>

      {/* <h1>Title</h1>
      <p>Content</p>
      <button>Delete</button> */}
    </div>
  );
};

export default Notes;
