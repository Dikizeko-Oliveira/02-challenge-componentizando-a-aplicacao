import { useState } from "react";

import { Button } from "./Button";

interface GenreResponse {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreResponse[];
  setSelectedGenreId: (id: number) => void;
}

export function SideBar({ genres, setSelectedGenreId }: SideBarProps) {
  const [currentGenreId, setCurrentGenreId] = useState(1);

  function handleClickButton(id: number) {
    setCurrentGenreId(id);
    setSelectedGenreId(id);
  }
  
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
  
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={currentGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}