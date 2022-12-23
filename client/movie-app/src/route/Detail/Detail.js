import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import propTypes from 'prop-types';
import "./Detail.css";

function Detail({coverImg, title, summary, genres, year}) {
    const { id } = useParams();
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json);
    };
    useEffect(() => {
      getMovie();
    }, []);
 

    return (
    <div className='movie'>
      <img src={coverImg} alt={title} className="movieImg"/>
      <h2 className='movieTitle'>{title}</h2>
      <h3 className="styles.movieYear">{year}</h3>
      <p>{summary}</p>
      <ul className='movieGenre'>
        {genres.map((g) => (<li key={g}>{g}</li>))}
      </ul>
    </div>

    )
};

Detail.propTypes = {
  id : propTypes.number.isRequired,
  coverImg : propTypes.string.isRequired,
  title :  propTypes.string.isRequired,
  summary :  propTypes.string.isRequired,
  genres : propTypes.arrayOf(propTypes.string).isRequired
};

export default Detail;
