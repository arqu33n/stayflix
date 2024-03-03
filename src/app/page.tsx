"use client";
import Genres from "@pages/genres";
import Main from "@pages/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/genres" element={<Genres />} />
      </Routes>
    </BrowserRouter>
  );
}
