import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalComponents from "./GlobalComponents";
import CreateArea from "../pages/notes/KeepNotes";
import ArchivedNotes from "../pages/archived_notes/ArchivedNotes";
import PageNotFound from "../pages/not_found/PageNotFound";
import Trash from "../pages/trash/Trash";
import SearchNotes from "../pages/search_notes/SearchedNotes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalComponents />}>
          <Route path="/" element={<CreateArea />} />
          <Route path="/home" element={<CreateArea />} />
          <Route path="/archive" element={<ArchivedNotes />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/search" element={<SearchNotes />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
