import {useParams} from "react-router-dom";
import {useEffect, useState } from "react";
import styles from "../components/Detail.module.css"

function Detail(){
  // path의 매개변수와 인자 값을 한 쌍으로 한 객체 반환.
  const {id}= useParams();
  const getMovie = async() =>{
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    console.log(json);
    setMovie(json.data.movie);
  }

  const [movie,setMovie] =useState([]);

  useEffect(()=>{
    getMovie()
  },)

  return(
    <div className={styles.div}>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} alt=""></img>
      <p>{movie.description_intro}</p>
    </div>
  )
}

export default Detail;