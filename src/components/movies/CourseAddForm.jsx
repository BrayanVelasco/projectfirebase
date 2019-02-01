import React from 'react'
import uid from 'uid'
import Calendar from './Calendar'
import MultiSelect from './MultiSelect'
import {categories} from '../../data/categories'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './form.css'
import './list.css'


//clonamos el objeto
const optionsCategories = categories.map(cat => (
    Object.assign({}, { label: cat, value: cat})
))



const MovieAddForm = (props) => (
    <form className="pure-form AddForm" onSubmit={props.onAddMovie}>
        <input type="hidden" name="id" value={uid(10)}></input>
        <input type="text" placeholder="Movie Name" name="name" ></input>
        <MultiSelect name="categories" placeholder="Choose category" options={optionsCategories} />
        <Calendar name="date"/>
        <textarea rows="5" cols="100" placeholder="Synopsis" name="synopsis" ></textarea>
        <input type="text" placeholder="Cast" name="cast" ></input>
        <input type="text" placeholder="URL Movie" name="urlmovie" ></input>
        <input type="text" placeholder="URL Poster" name="poster" ></input>
        

        
        <input className="pure-button pure-button-primary" type="submit" value="Save"></input>
    </form>
)

export default MovieAddForm