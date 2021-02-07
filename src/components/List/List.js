import React, { Component } from "react";
// Use this cmd: 'npm install react-transition-group --save' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

import "./List.css";

class List extends Component {
  state = {
    items: [1, 2, 3]
  };

  addItemHandler = () => {
    this.setState(prevState => {
      return {
        items: prevState.items.concat(prevState.items.length + 1)
      };
    });
  };

  removeItemHandler = selIndex => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex)
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item, index) => (
      // <Transition /> Component => We use it to control the display of elements inside it (like the '<li />') 
      //       => it manage 4 main states :: 'entering' || 'entered' || 'exiting' || 'exited'
      <CSSTransition key={index} classNames="fade" timeout={300}>
        <li className="ListItem" onClick={() => this.removeItemHandler(index)}>
          {item}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        {/* <TransitionGroup /> => Handle a 'Dynamic List' inside it :: manages a set of transition components (<Transition> and <CSSTransition>) in a list
                            => it's set auto the 'in' property to the wrapped 'Transition' (like '<CSSTransition />') */}
        <TransitionGroup component="ul" className="List">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;