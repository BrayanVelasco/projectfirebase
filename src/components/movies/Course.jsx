import React from 'react'
const Movie = (props) => (
    <li className="CoursesList-item">
        <a className="CoursesList-link" href={props.urlMovie}>
            <figure>
                <img src={props.poster} alt={props.name}/>
                <figcaption>
                    <h2>{props.name}</h2>
                </figcaption>
            </figure>       
        </a>
        <section>
            <p>
                <i className="fas fa-user-astronaut"></i>
                {props.cast}
            </p>
        <p>
            <i class="far fa-calendar-alt"></i>
            {props.date}
        </p>
        <p>
            <i className ="fa fa-tags"></i>
            {
            props.categories.map(
                (cat, index, arr) =>(
                    (index === arr.length -1)
                    ?cat
                    : `${cat}, `
                )
            )
            }
        </p>
        <p>
            <i class="fas fa-film"></i>
            {props.synopsis}
           
        </p>
        </section>

    </li>
)
export default Movie