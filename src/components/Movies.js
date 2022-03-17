import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [allMovies, setAllMovies] = useState({});

  let navigate = useNavigate();

  // get all from api
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/search/shows?q=all`).then((res) => {
      const movies = res.data;
      setAllMovies(movies);
    });
  }, []);
  return (
    <div className="mx-auto container">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <h1 className="lg:text-4xl text-3xl font-semibold text-white text-center">
          Movie's World
        </h1>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
            {allMovies.length &&
              allMovies.map((movie) => (
                <div key={movie.show.id} className="relative flex flex-col">
                  <img
                    src={movie.show.image.medium}
                    alt="two girls"
                    className="w-full"
                  />
                  <img
                    src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                    alt="opacity bg"
                    className="absolute w-full top-0"
                  />
                  <div className="absolute m-6 bottom-0 z-30">
                    <p className="text-sm leading-none text-white">
                      {movie.show.status}
                    </p>
                    <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                      {movie.show.name}
                    </h1>
                    <button
                      onClick={() => navigate(`/movies/${movie.show.id}`)}
                      className="mt-4 text-sm font-medium cursor-pointer leading-4 underline text-white"
                    >
                      Discover
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
