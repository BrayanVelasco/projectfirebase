import React, {Component} from 'react'
import MovieApp from '../../movies/'

export default class DashBoardProtected extends Component{
    render(){
        return(
            <article>
                <MovieApp></MovieApp>
            </article>
        )
    }
}