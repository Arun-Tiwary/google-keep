import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  notes: [
    { id: 0, title: "Hulk", content: "I am Hulk", pinned: false },
    { id: 1, title: "Iron Man", content: "I am Iron Man", pinned: false },
  ],
  archivedNotes: [],
  trash: [],
  idKeeper: "132441342",
  searchValue: "",
  test: "",
};

export const keepSlice = createSlice({
  name: "keep",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      const newNote = {
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
        pinned: false,
      };
      state.notes.push(newNote);
    },
    updateNotes: (state, action) => {
      state.notes = state?.notes?.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.title,
              content: action.payload.content,
            }
          : note
      );
    },
    changePinnedStatus: (state, action) => {
      state.notes = state?.notes?.map((item) =>
        item.id === action.payload.id ? { ...item, pinned: !item.pinned } : item
      );
    },
    archiveNote: (state, action) => {
      console.log(action.payload);
      const archiveNote = {
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        pinned: false,
      };
      state?.archivedNotes?.push(archiveNote);
      state.notes = state?.notes.filter(
        (note) => note.id !== action.payload.id
      );
    },
    unarchiveNote: (state, action) => {
      state.notes.push(action.payload);
      state.archivedNotes = state.archivedNotes.filter(
        (note) => note.id !== action.payload.id
      );
    },
    moveToTrash: (state, action) => {
      state.trash.push(action.payload);
      state.notes = state.notes.filter((item) => item.id !== action.payload.id);
    },
    removeFromTrash: (state, action) => {
      state.notes.push(action.payload);
      state.trash = state.trash.filter((item) => item.id !== action.payload.id);
    },
    deleteFromTrash: (state, action) => {
      state.trash = state.trash.filter((item) => item.id !== action.payload.id);
    },

    changeIdKeeper: (state, action) => {
      state.idKeeper = action.payload;
    },
    search: (state, action) => {
      state.searchValue = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  addNotes,
  changeIdKeeper,
  updateNotes,
  changePinnedStatus,
  archiveNote,
  unarchiveNote,
  moveToTrash,
  removeFromTrash,
  deleteFromTrash,
  search,
} = keepSlice.actions;

export default keepSlice.reducer;
