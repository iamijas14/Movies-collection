import React, { useState } from "react";
import "./styles.css";

var MoviesDB = {
  Genre: [
    {
      Name: "Any film's worth seeing. The rest is a matter of taste"
    }
  ],
  Action: [
    {
      Name: "1. Captain America: Civil War"
    },
    {
      Name: "2. Logan"
    },
    {
      Name: "3. The Dark Knight"
    },
    {
      Name: "4. Avengers"
    },
    {
      Name: "5. Fast and furious"
    }
  ],
  Horror: [
    {
      Name: "1. Insidious"
    },
    {
      Name: "2. The Conjuring"
    },
    {
      Name: "3. Lights Out"
    },
    {
      Name: "4. The ring"
    },
    {
      Name: "5. Sinister "
    }
  ],
  Science_fiction: [
    {
      Name: "1. Inception"
    },
    {
      Name: "2. interstellar"
    },
    {
      Name: "3. Tenet"
    },
    {
      Name: "4. Star Wars"
    },
    {
      Name: "5. Children of Men"
    }
  ],
  Fantasy: [
    {
      Name: "1. Harry Potter"
    },
    {
      Name: "2. Pirates of the Caribbean"
    },
    {
      Name: "3. charlie and the chocolate factory"
    },
    {
      Name: "4. The chronicles of narnia "
    },
    {
      Name: "5. Jumanji"
    }
  ]
};

var myMovies = Object.keys(MoviesDB);

export default function App() {
  var [film, setFlim] = useState("Genre");

  function onClickHandler(favMovies) {
    setFlim(favMovies);
  }

  return (
    <div className="App">
      <nav className="heading">
        <h1>My movies store.</h1>
      </nav>

      <div id="play">
        {myMovies.map((favMovies) => (
          <button id="btns" onClick={() => onClickHandler(favMovies)}>
            {favMovies}
          </button>
        ))}
      </div>
      <div id="border">
        <ul id="list">
          {MoviesDB[film].map((favMovies) => (
            <li>
              <div className="name">{favMovies.Name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
