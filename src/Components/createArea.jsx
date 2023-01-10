import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { notes } from "../Data/notes";
export let myNotes = notes;

const CreateArea = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getTitle, setTitle] = useState("");
  const [getBody, setBody] = useState("");

  const createNote = () => {
    myNotes = [...myNotes, { title: getTitle, content: getBody }];
    localStorage.setItem("localNotes", JSON.stringify(myNotes));
    return myNotes;
  };
  console.log(myNotes);

  return (
    <>
      <Button
        display={"flex"}
        p={"20px"}
        size="lg"
        onClick={onOpen}
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
              onChange={(e) => setTitle(e.target.value)}
            ></Input>
          </ModalHeader>

          <ModalBody>
            <textarea
              placeholder="Take a note..."
              name=""
              id=""
              cols="53"
              rows="10"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </ModalBody>

          <ModalFooter>
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
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateArea;
