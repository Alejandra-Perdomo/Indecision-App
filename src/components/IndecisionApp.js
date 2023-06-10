import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options : ['Alice in wonderland','Franckenstein','Phantom of the Opera','The Help'],
        }
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options: []
            }
        })
    }

    handlePick(){
        let picked = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[picked]);
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Let chance decide!'
        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length > 0} handlePick={this.j}/>
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
            <AddOption/>
            </div>
        )
    }
}

export default IndecisionApp;