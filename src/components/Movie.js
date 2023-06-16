import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function Movie({id,coverImg, title, summary, genres}){
  return (
    <div>
      <img src={coverImg} alt=""></img>
      <h2>
        <Link to={`/movie/${id}`}  style={{textDecoration:'none'}}>{title}</Link>
      </h2>
      <p>{summary.length>100? `${summary.slice(0,100)}...` :summary }</p>
        <ul>
          {genres.map((g) => <li key={g}>{g}</li>)}
        </ul>  
    </div>
  )
}

Movie.propTypes={
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Movie;