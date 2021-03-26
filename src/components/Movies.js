import React from 'react';
import {Link} from 'react-router-dom';

function Movies({title,id,genres,poster,rating,summary}){
  genres=genres.map((genre)=>`${genre} | `);
  return (
      //how to rid react-router-dom Link style
      <Link style={{textDecoration:'none'},{color:'rgb(244,244,244)'}}to={{
          pathname: `/movie/${id}`,
          state: {
              title,
              id,
              genres,
              poster,
              rating,
              summary
          }
      }}>
    <div className='movieWrapper'key={id}>
       <img className='movie__poster' src={poster}/>
       <div className='movie__title'>{title}</div>
       <div className='movie__genres'>
          <div>{genres}</div>
       </div>
       <div className='movie__rating'>{rating}</div>
    </div>
    </Link>

  )
}

export default Movies;