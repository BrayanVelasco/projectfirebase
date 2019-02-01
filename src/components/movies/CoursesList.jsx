import React from 'react'

import Movie from './Course'


const  MovieList = (props) => (
        
            
                
                <ul className="CoursesList">
                    {
                        props.movies.map(movie =>(
                            <Movie
                                key={movie.id} 
                                id={movie.id}
                                name={movie.name}
                                categories = {movie.categories}
                                date ={movie.date}
                                synopsis ={movie.synopsis}
                                cast = {movie.cast}
                                urlMovie = {movie.urlMovie}
                                poster = {movie.poster}
                            ></Movie> 
                        )

                        )
                    }
                    
                </ul>
)
    


export default MovieList