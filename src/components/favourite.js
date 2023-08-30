import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "./appContext";

export default function Favourite() {
  const { favouriteBreed, setFavouriteBreed } = useContext(AppContext);
  const [render, rerender] = useState(true);

  const deleteBreed = (breed) => {
    let favourite = favouriteBreed;
    let itemIndex = favourite.indexOf(breed);
    favourite.splice(itemIndex, 1);
    setFavouriteBreed(favourite);
    rerender(!render);
  };

  return (
    <div className="container">
      <div className="row">
        {favouriteBreed?.map((breed, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div class="card">
              <img src={breed} class="card-img-top" alt="..." />
              <div class="card-body">
                <button
                  className="btn rounded-0 btn-dark"
                  onClick={() => deleteBreed(breed)}
                >
                  Remove from the Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
