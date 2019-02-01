import React from 'react'
import Select from 'react-select'


class MultiSelect extends React.Component{
    constructor(...props){
        super(...props)

        this.state={
            options: this.props.options,
            value:[]
        }

        this.handleSelectChange = this.handleSelectChange.bind(this)
    }
    handleSelectChange(value){
        this.setState({value})


    }
    render(){
        return (
            <Select 
                isMulti={true}
                simpleValue={true}
                joinValues={true}
                name={this.props.name}
                value={this.state.value}
                options={this.state.options}
                onChange ={this.handleSelectChange}
            />
        )
    }
}

export default MultiSelect