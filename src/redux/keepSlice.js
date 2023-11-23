import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  notes: [
    { id: 0, title: "Hulk", content: "I am Hulk", pinned: false },
    { id: 1, title: "Iron Man", content: "I am Iron Man", pinned: false },
  ],
  pinnedNotes: [],
  idKeeper: "132441342",
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
    removeNotes: (state, action) => {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
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
    addPinnedNotes: (state, action) => {
      state.pinnedNotes = state?.pinnedNotes.push(action);
    },
    changeIdKeeper: (state, action) => {
      state.idKeeper = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  addNotes,
  removeNotes,
  changeIdKeeper,
  updateNotes,
  changePinnedStatus,
} = keepSlice.actions;

export default keepSlice.reducer;
