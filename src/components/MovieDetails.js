import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TicketForm from "./TicketForm";

const MovieDetails = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => {
      const movie = res.data;
      if (movie) {
        setSingleMovie(movie);
        setLoading(false);
      }
    });
  }, [id]);

  return (
    <>
      <div className="xl:mx-auto xl:container">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          {loading ? (
            <div className="text-gray-300 text-center font-semibold text-xl tracking-widest">
              Loading...
            </div>
          ) : (
            <>
              <Link to="/" className="text-gray-400 underline">
                Back to home
              </Link>
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-1/2 md:py-9 py-6">
                  <img
                    src={singleMovie.image.original}
                    alt="bag"
                    className="lg:w-full h-full object-cover object-center w-full"
                  />
                </div>
                <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
                  <p className="text-sm leading-none text-gray-400 pb-2">
                    {singleMovie.status}
                  </p>
                  <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-200 lg:pb-6 md:pb-4 pb-2">
                    {singleMovie.name}
                    <sub className="text-xs ml-5">
                      {singleMovie.rating.average}
                    </sub>
                  </p>
                  <p className="text-sm leading-5 text-gray-400 md:pb-10 pb-8">
                    {singleMovie.summary}
                  </p>
                  <div className="md:block flex items-center justify-center">
                    <button
                      onClick={() => setShow(true)}
                      className="lg:w-auto w-full border border-gray-400 hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-sm leading-none text-gray-400"
                    >
                      BUY TICKET
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-3xl font-semibold">{singleMovie.name}</h3>
                  <p className="text-blueGray-500 text-sm leading-relaxed">
                    {singleMovie.rating.average}
                  </p>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShow(false)}
                  >
                    <span className="text-red-500 h-6 w-6 ">x</span>
                  </button>
                </div>
                {/*body*/}

                <div className="relative p-6 flex-auto">
                  <p className="text-sm leading-none text-gray-600 pb-2">
                    Status:{singleMovie.status}
                  </p>
                  <p className="text-sm leading-none text-gray-600 pb-2">
                    Genres:{singleMovie.genres[0]}
                  </p>
                  <p className="text-sm leading-none text-gray-600 pb-2">
                    Premiered: {singleMovie.premiered}
                  </p>
                  <p className="text-sm leading-none text-gray-600 pb-2">
                    Official Site:{" "}
                    <span className="underline">
                      {singleMovie.officialSite}
                    </span>
                  </p>
                  <p className="text-sm leading-none text-gray-600 pb-2">
                    Schedule: {singleMovie.schedule.days}
                    {","}
                    {singleMovie.schedule.time}
                  </p>

                  <p className="text-blueGray-500 text-sm mt-4 leading-relaxed">
                    {singleMovie.summary}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Confirm & Exit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default MovieDetails;
