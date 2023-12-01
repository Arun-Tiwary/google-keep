import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ArchiveNoteCard from "../../components/ArchiveNoteCard";
import { deleteFromTrash, removeFromTrash } from "../../redux/keepSlice";
import { successToast } from "../../utils/toast";
import TrashNoteCard from "../../components/TrashNoteCard";
import { alertConfitm } from "../../utils/confirmAlert";

const Trash = () => {
  const trashedNotes = useSelector((state) => state.keep.trash);
  const dispatch = useDispatch();

  const handleTrash = (item) => {
    dispatch(removeFromTrash(item));
    successToast("Note restored");
  };
  const deleteForever = (item) => {
    alertConfitm(
      "Delete Note Forever?",
      "",
      "confirm",
      () => {
        dispatch(deleteFromTrash(item));
        successToast("Note Deleted");
      },
      "cancel"
    );
  };
  return (
    <>
      <div className="ml-40">
        {trashedNotes?.length ? (
          <div>
            <SimpleGrid
              className="my-6 mx-16"
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {trashedNotes?.map((item, i) => (
                <>
                  {" "}
                  <TrashNoteCard
                    item={item}
                    // handleUpdateId={handleUpdateId}
                    // onOpen={onOpen}
                    // handleDelete={handleDelete}
                    // handlePinned={handlePinnedNotes}
                    handleTrash={handleTrash}
                    deleteForever={deleteForever}
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

export default Trash;
