import React from "react";
import NoteCard from "../../components/NoteCard";
import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import ArchiveNoteCard from "../../components/ArchiveNoteCard";
import { unarchiveAndPinNote, unarchiveNote } from "../../redux/keepSlice";
import { successToast } from "../../utils/toast";

const ArchivedNotes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const archivedNotes = useSelector((state) => state.keep.archivedNotes);
  const dispatch = useDispatch();

  const handleArchive = (item) => {
    dispatch(unarchiveNote(item));
    successToast("Note unarchived");
  };
  const handlePinAndUnarchive = (item) => {
    dispatch(unarchiveAndPinNote(item));
    successToast("Note unarchived and pinned");
  };
  return (
    <>
      <div className="ml-40">
        {archivedNotes?.length ? (
          <div>
            <SimpleGrid
              className="my-6 mx-16"
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {archivedNotes?.map((item, i) => (
                <>
                  {" "}
                  <ArchiveNoteCard
                    item={item}
                    // handleUpdateId={handleUpdateId}
                    onOpen={onOpen}
                    // handleDelete={handleDelete}
                    // handlePinned={handlePinnedNotes}
                    handleArchive={handleArchive}
                    handlePinAndUnarchive={handlePinAndUnarchive}
                  />
                </>
              ))}
            </SimpleGrid>
          </div>
        ) : (
          <>
            <div className="mx-16">
              <h3>Your Notes will come here</h3>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ArchivedNotes;
