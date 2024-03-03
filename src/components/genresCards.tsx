import React, { useState, useEffect } from "react";

const GenresCards: React.FC = () => {
  const [genresList, setGenresList] = useState<any[]>([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTgyOGMwNDkxYmMwY2Q0MDdlNjA3NzQ4ZGFiNGRlYSIsInN1YiI6IjY1ZTQ4NzNhOTk3OWQyMDE3Y2IyNjdjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q1eWG7wFy9TY4YHW3o1Ef5oBuJX28v55ijBMu3Zt92s",
    },
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        options
      );
      const genres = await response.json();
      console.log(genres);
      setGenresList(genres.genres);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const renderGenresCards = () => {
    if (!genresList) return null;

    return genresList.map((genre: any) => (
      <div key={genre.id} className="genres__cards-item">
        <div className="genres__cards-item-title">{genre.name}</div>
      </div>
    ));
  };
  return <div className="genres__cards">{renderGenresCards()}</div>;
};
export default GenresCards;
