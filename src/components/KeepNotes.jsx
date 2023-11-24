import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { notes } from "../Data/notes";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotes,
  changeIdKeeper,
  removeNotes,
  updateNotes,
  changePinnedStatus,
  archiveNote,
} from "../redux/keepSlice";
import Notes from "./Note";
import NoteCard from "./NoteCard";
import Header from "./Header";
import { successToast } from "../utils/toast";
import toast from "react-hot-toast";
import { alertConfitm } from "../utils/confirmAlert";
export let myNotes = notes;

const KeepNotes = () => {
  // const [getTitle, setTitle] = useState("");
  // const [getBody, setBody] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const myNotes = useSelector((state) => state.keep.notes);
  const archivedNotes = useSelector((state) => state.keep.archivedNotes);
  const notesId = useSelector((state) => state.keep.idKeeper);
  const [search, setSearch] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(archivedNotes);

  // console.log(reversedOrder);
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
  useEffect(() => {
    let reversedOrder = [...myNotes].reverse();
    setNoteList(reversedOrder);
    const filter = myNotes.find((item) => item.pinned);
    console.log(filter, "filter ");
  }, [myNotes]);

  useEffect(() => {
    let data = searchObjects(myNotes, search);
    console.log(data, "data");
    let reversedOrder = [...data].reverse();
    setNoteList(reversedOrder);
  }, [search]);

  const [inputNotes, setInputNotes] = useState({
    title: "",
    body: "",
  });
  const keepNotes = useSelector((state) => state.keep.notes);
  const _id = useSelector((state) => state.keep.idKeeper);
  const dispatch = useDispatch();
  console.log(keepNotes, "redux notes");

  // local storage notes
  // const createNote = () => {
  //   myNotes = [...myNotes, { title: getTitle, content: getBody }];
  //   localStorage.setItem("localNotes", JSON.stringify(myNotes));
  //   return myNotes;
  // };

  // create notes function
  const createNote = () => {
    const notes = { title: inputNotes.title, content: inputNotes.body };
    dispatch(addNotes(notes));
    successToast("Created Successfully");
  };

  // delelte notes function
  const handleDelete = (item) => {
    alertConfitm("Are you sure", "You want to delete", () => {
      dispatch(removeNotes(item.id));
      successToast("Deleted Successfully");
    });
  };

  //function to update id on notes selection
  const handleUpdateId = (id) => {
    console.log(id);
    dispatch(changeIdKeeper(id));
    const noteToUpdate = keepNotes.find((item) => item.id === id);
    setInputNotes({ title: noteToUpdate.title, body: noteToUpdate.content });
  };

  // function to update a particular note
  const updateNote = () => {
    const notes = {
      id: _id,
      title: inputNotes.title,
      content: inputNotes.body,
    };
    dispatch(updateNotes(notes));
    setInputNotes({ title: "", body: "" });
    dispatch(changeIdKeeper(""));
    successToast("Updated Successfully");
  };

  // function to channge pinned status of a note
  function handlePinnedNotes(item) {
    dispatch(changePinnedStatus(item));
  }

  //function to handle archive notes
  const handleArchive = (item) => {
    dispatch(archiveNote(item));
  };

  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
        {/* header */}
        {/* <button onClick={() => setIsDarkMode(!isDarkMode)}>Change</button> */}
        <Header search={search} setSearch={setSearch} />
        {/* create note area */}
        <Button
          display={"flex"}
          p={"20px"}
          size="lg"
          onClick={() => {
            dispatch(changeIdKeeper(""));
            setInputNotes({ title: "", body: "" });
            setSearch("");
            onOpen();
          }}
          margin="20px auto 10px auto"
        >
          Take a note...
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Input
                type={"text"}
                placeholder="Title"
                value={inputNotes.title}
                onChange={(e) =>
                  setInputNotes({ ...inputNotes, title: e.target.value })
                }
              ></Input>
            </ModalHeader>

            <ModalBody>
              <textarea
                placeholder="Take a note..."
                name=""
                id=""
                cols="40"
                rows="10"
                value={inputNotes.body}
                onChange={(e) =>
                  setInputNotes({ ...inputNotes, body: e.target.value })
                }
              ></textarea>
            </ModalBody>

            <ModalFooter>
              {notesId ? (
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    onClose();
                    updateNote();
                  }}
                >
                  Update Note
                </Button>
              ) : (
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    onClose();
                    createNote();
                  }}
                >
                  Add Note
                </Button>
              )}

              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* notes list area */}
        {/* <Notes /> */}
        {noteList.find((note) => note.pinned) ? (
          <>
            <div>
              <h3>Pinned Notes</h3>
              <div>
                <SimpleGrid
                  className="my-6 mx-16"
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                >
                  {noteList?.map((item, i) => (
                    <>
                      {item.pinned && (
                        <NoteCard
                          item={item}
                          handleUpdateId={handleUpdateId}
                          onOpen={onOpen}
                          handleDelete={handleDelete}
                          handlePinned={handlePinnedNotes}
                          handleArchive={handleArchive}
                        />
                      )}
                    </>
                  ))}
                </SimpleGrid>
              </div>
            </div>
            <div>
              <h4>Others</h4>
              <div>
                <SimpleGrid
                  className="my-6 mx-16"
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                >
                  {noteList?.map((item, i) => (
                    <>
                      {!item.pinned && (
                        <NoteCard
                          item={item}
                          handleUpdateId={handleUpdateId}
                          onOpen={onOpen}
                          handleDelete={handleDelete}
                          handlePinned={handlePinnedNotes}
                          handleArchive={handleArchive}
                        />
                      )}
                    </>
                  ))}
                </SimpleGrid>
              </div>
            </div>
          </>
        ) : (
          <>
            {myNotes.length ? (
              <div>
                <SimpleGrid
                  className="my-6 mx-16"
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                >
                  {noteList?.map((item, i) => (
                    <>
                      {" "}
                      <NoteCard
                        item={item}
                        handleUpdateId={handleUpdateId}
                        onOpen={onOpen}
                        handleDelete={handleDelete}
                        handlePinned={handlePinnedNotes}
                        handleArchive={handleArchive}
                      />
                    </>
                  ))}
                </SimpleGrid>
              </div>
            ) : (
              <h1>Your notes will come here</h1>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default KeepNotes;
