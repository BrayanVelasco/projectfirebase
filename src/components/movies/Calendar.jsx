import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

class Calendar extends React.Component{
    constructor(...props){
        super(...props)
        this.state = {
            startDate: null
        
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(date){
        this.setState({
            startDate:date
        })


    }

    render(){
        return(
            <DatePicker 
                selected={this.state.startDate}
                onChange={this.handleChange}
                placeholderText="Date"
                isClearable={true}
                dateFormat="DD/MM/YYYY"
                name={this.props.name}
            
            />
        )
    }
}

export default Calendar