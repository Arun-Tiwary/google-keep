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
import { notes } from "../../data/notes";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotes,
  changeIdKeeper,
  removeNotes,
  updateNotes,
  changePinnedStatus,
  archiveNote,
  moveToTrash,
} from "../../redux/keepSlice";
import Notes from "../../components/Note";
import NoteCard from "../../components/NoteCard";
import Header from "../../components/Header";
import { successToast } from "../../utils/toast";
import toast from "react-hot-toast";
import { alertConfitm } from "../../utils/confirmAlert";
import { useRef } from "react";
export let myNotes = notes;

const KeepNotes = () => {
  // const [getTitle, setTitle] = useState("");
  // const [getBody, setBody] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const myNotes = useSelector((state) => state.keep.notes);
  const notesId = useSelector((state) => state.keep.idKeeper);
  const [search, setSearch] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [inputNotes, setInputNotes] = useState({
    title: "",
    body: "",
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const keepNotes = useSelector((state) => state.keep.notes);
  const _id = useSelector((state) => state.keep.idKeeper);
  const dispatch = useDispatch();
  const bodyRef = useRef(null);

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

  // console.log(keepNotes, "redux notes");

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
    onClose();
    successToast("Created Successfully");
  };

  // delelte notes function
  const handleDelete = (item) => {
    dispatch(moveToTrash(item));
    successToast("Deleted and Trashed Successfully");
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
    if (item.pinned) successToast("Note unpinned and archived");
    else successToast("Note archived");
  };

  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
        {/* header */}
        {/* <button onClick={() => setIsDarkMode(!isDarkMode)}>Change</button> */}
        {/* <Header search={search} setSearch={setSearch} /> */}
        <div className="ml-40">
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
                  onChange={(f) =>
                    setInputNotes({ ...inputNotes, title: f.target.value })
                  }
                  onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                      event.preventDefault();
                      bodyRef.current.focus();
                    }
                  }}
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
                  onChange={(e) => {
                    e.preventDefault();
                    setInputNotes({
                      ...inputNotes,
                      body: bodyRef.current.value,
                    });
                  }}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !e.shiftKey && createNote()
                  }
                  ref={bodyRef}
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
              <div className="mx-16">
                <h3>PINNED</h3>
                <div>
                  <SimpleGrid
                    className="my-6"
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
              <div className=" mx-16">
                <h4>OTHERS</h4>
                <div>
                  <SimpleGrid
                    className="my-6"
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
      </div>
    </>
  );
};

export default KeepNotes;
