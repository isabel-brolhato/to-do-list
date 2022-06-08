import React from 'react';
import AddBtn from './Components/AddBtn';
import Title from './Components/Title';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <AddBtn />
<Title />
        <div className="container">
          <input
            type="text"
            placeholder="Add item name"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >Add</button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="delete-btn" onClick={() => this.deleteItem(item.id)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}


export default App;
