import React, { Component } from 'react';
import {render} from 'react-dom';

//import Mysec from './Mysec';
//import Mybutton from './Mybutton';
import MyComponent from './MyComponent'
///in another file export default class MySection extends Component {

class ButtonCount extends Component {
   handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
   };
   render() {
       return (
           <button onClick={this.handleClick}>
               +{this.props.incrementValue}
           </button>
       );
   }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
};

class App extends Component {
    state = { counter: 0 };

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    };

    render() {
        return(
            <div>
                <ButtonCount incrementValue={1} onClickFunction={this.incrementCounter} />
                <ButtonCount incrementValue={5} onClickFunction={this.incrementCounter} />
                <ButtonCount incrementValue={10} onClickFunction={this.incrementCounter} />
                <ButtonCount incrementValue={50} onClickFunction={this.incrementCounter} />
                <ButtonCount incrementValue={100} onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        );
    }
}


render((
    <MyComponent>
        <MyComponent.First />
        <MyComponent.Second />
    </MyComponent>,
    <App />),
    document.getElementById('root')
);



