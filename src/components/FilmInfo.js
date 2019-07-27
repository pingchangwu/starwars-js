import React from "react";

const FilmInfo = ({ film }) => {
  return (
    <div>
      <h3>Movie detail</h3>
      <div>Title: {film.title}</div>
      <div>Episode id: {film.episode_id}</div>
      <div>Opening Crawl: {film.opening_crawl}</div>
      <div>Director: {film.director}</div>
      <div>Producer: {film.producer}</div>
      <div>Release Date: {film.release_date}</div>
    </div>
  );
};

export default FilmInfo;
