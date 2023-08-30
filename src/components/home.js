import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./appContext";

export default function HomePage() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const { searchBreed, favouriteBreed, setFavouriteBreed } = useContext(
    AppContext
  );
  useEffect(() => {
    fetchBreed();
  }, [searchBreed]);
  async function fetchBreed() {
    try {
      const res = await fetch(
        `https://dog.ceo/api/breed/${searchBreed}/images`
      );
      const breeds = await res.json();

      if (breeds.status === "success") {
        setResult(breeds);
      } else {
        setError("Breed not found..!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function addFavourite(breed) {
    favouriteBreed.push(breed);
    setFavouriteBreed(favouriteBreed);
  }
  return (
    <div className="container">
      <div className="row">
        {result &&
          searchBreed &&
          result?.message?.map((breed, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div class="card">
                <img src={breed} class="card-img-top" alt="..." />
                <div class="card-body">
                  <button
                    className="btn rounded-0 btn-dark"
                    onClick={() => addFavourite(breed)}
                  >
                    Add to Favourite
                  </button>
                </div>
              </div>
            </div>
          ))}
        {!result && !searchBreed && <h3>You didn't searched anything</h3>}
        {error && searchBreed && <h3>{error}</h3>}
      </div>
    </div>
  );
}
