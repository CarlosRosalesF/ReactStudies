import React from "react"

// React Components
import AddOption from "./AddOption"
import Header from "./Header"
import Action from "./Action"
import Options from "./Options"

export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state= {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options")
            const options = JSON.parse(json)
    
            if(options)
            {
                this.setState(()=> ({ options }))
            }
        } catch (e) {

        }

    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options", json)
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    handleDeleteOptions() {
        this.setState(()=> ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option != optionToRemove)
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNum])
    }
    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exits"
        }

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }))
    }
    render() {
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleAddOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
