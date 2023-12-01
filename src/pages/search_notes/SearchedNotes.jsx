import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NoteCard from "../../components/NoteCard";
import { SimpleGrid } from "@chakra-ui/react";

const SearchNotes = () => {
  const search = useSelector((state) => state.keep.searchValue);
  const notes = useSelector((state) => state.keep.notes);
  const archivedNotes = useSelector((state) => state.keep.archivedNotes);
  const [searchResult, setSearchResult] = useState({
    note: [],
    archiveed: [],
  });

  useEffect(() => {
    if (search?.length) {
      let noteResult = searchObjects(notes, search);
      let archiveResult = searchObjects(archivedNotes, search);
      setSearchResult({
        ...searchResult,
        note: noteResult,
        archiveed: archiveResult,
      });
    }
  }, [search]);
  console.log(searchResult, "seach");

  function searchObjects(array, searchTerm) {
    return array?.filter((obj) => {
      // Check if any property value in the object contains the searchTerm
      return Object.values(obj).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }
  return (
    <>
      <div className="ml-40">
        <>
          {searchResult.note?.length ? (
            <div>
              <SimpleGrid
                className="my-6 mx-16"
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              >
                {searchResult.note?.map((item, i) => (
                  <>
                    {" "}
                    <NoteCard
                      item={item}
                      // handleUpdateId={handleUpdateId}
                      // onOpen={onOpen}
                      // handleDelete={handleDelete}
                      // handlePinned={handlePinnedNotes}
                    />
                  </>
                ))}
              </SimpleGrid>
            </div>
          ) : (
            ""
          )}
        </>

        {searchResult?.archiveed?.length > 0 && (
          <div>
            <div className="mx-16">
              <h3>ARCHIVED</h3>
            </div>
            <SimpleGrid
              className="my-6 mx-16"
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {searchResult.archiveed?.map((item, i) => (
                <>
                  {" "}
                  <NoteCard
                    item={item}
                    // handleUpdateId={handleUpdateId}
                    // onOpen={onOpen}
                    // handleDelete={handleDelete}
                    // handlePinned={handlePinnedNotes}
                  />
                </>
              ))}
            </SimpleGrid>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchNotes;
