import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./Detail.css";
// import axios from "axios";

// {coverImg, title, summary, genres, year}
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovies = async () => {
  const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect (() => {
      getMovies();
  },);

  console.log(movies);
  return (
    <div className='container'>
    {/* <div className='loader'>
      {loading ? (<h1>loading...</h1>) : 
      (<div className='movies'>{movies.map(movie =>
      <Movie key={movie.id}
      id={movie.id}
      coverImg={movie.medium_cover_image}
      title={movie.title}
      year={movie.year}
      summary={movie.summary}
      genres={movie.genres} /> )}</div>)}
    </div> */}
    </div>
  );
}

export default Detail;