import React from 'react'

import PropTypes from 'prop-types'
import MovieList from "./CoursesList"
import MovieAddForm from './CourseAddForm'
import uid from 'uid'

import {categories, movies} from '../../data/'

class MovieApp extends React.Component{
    constructor(...props){
        super(...props)

        this.state = {
            movies: movies
        }
        this.handleOnAddMovie = this.handleOnAddMovie.bind(this)
        
    }
    handleOnAddMovie(event){
        //alert("Event in React")
        event.preventDefault()
        
        let form = event.target //formulario
        let movie ={ //obtengo valores
            id: form.id.value, 
            name: form.name.value ? form.name.value : MovieApp.defaultProps.name ,
            categories: form.categories.value ? form.categories.value.split(",") : MovieApp.defaultProps.categories,
            cast : form.cast.value ? form.cast.value : MovieApp.defaultProps.cast,
            synopsis: form.synopsis.value ? form.synopsis.value : MovieApp.defaultProps.synopsis,
            date : form.date.value ? form.date.value : MovieApp.defaultProps.date,
            urlmovie: form.urlmovie.value ? form.urlmovie.value : MovieApp.defaultProps.urlmovie,
            poster : form.poster.value ? form.poster.value : MovieApp.defaultProps.poster
            
        }

        this.setState({
            movies: this.state.movies.concat([movie])
        })
        form.reset()

    }




    render(){
        if(!this.state.movies.length){
            return(
                <div>
                    <p>There are not movies</p>
                    <button onClick={this.fetchData}>Load Movies</button>
                </div>
            )
        }
        else{
            return(
                <div>
                    <MovieAddForm 
                        onAddMovie ={this.handleOnAddMovie}></MovieAddForm>
                    <MovieList
                        movies={this.state.movies}
                    ></MovieList>
                    <button onClick={this.resetData}>Delete Movie</button>
                </div>
                
            )    
        }
        
    }
}

MovieApp.propTypes ={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired     
}
MovieApp.defaultProps = {
    id:uid(10),
    name: "Unknown course",
    categories: ["unknown"],
    date:"Unknown",
    synopsis:"Unknown",
    urlmovie:"Unknown",
    poster:"Unknown",
    cast:"Unknown"

}

export default MovieApp
