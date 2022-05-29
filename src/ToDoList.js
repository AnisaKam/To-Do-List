
import { Component } from "react";
import star from './star.jpg';


export class ToDoList extends Component {
    state = {
        userInput:'',
        toDoList: []
    }

onChangeEvent(e) {
    this.setState({userInput: e});
}

addItem(input) {
    if (input === '') {
        alert ("Please enter an item")
    } else{
    let  listArray = this.state.toDoList;
    listArray.push(input);
    this.setState({toDoList: listArray, userInput:''})
    }
}

deleteItem() {
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList: listArray})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e) {
    e.preventDefault();
}

render() {
    return(
        <div>
        <form onSubmit={this.onFormSubmit}>
        <div className='container'>
            <input type='text' 
            placeholder="Your plans for today..."
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
        </div>
        <div className='container'>
            <button onClick={() => this.addItem(this.state.userInput)} className='add'>Add</button>
        </div>
        <ul>
            {this.state.toDoList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>             
                <img src={star} width='30px' alt='star'/>   
                {item}</li>                                            /*для исправления ошибки добавляем key={index} */
            ))}
        </ul>

        <div className='container'>
            <button onClick={() => this.deleteItem()} className='delete'>Delete</button>
        </div>
        </form>
        </div>

    )
}
}
