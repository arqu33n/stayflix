import React from "react";
import Header from "@components/header";
import GenresCards from "@components/genresCards";
import "../styles/core.css";
import "../styles/genres.css";

const Genres: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="genres">
        <div className="genres__content container">
          <div className="genres__gallery">
            <GenresCards />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Genres;
