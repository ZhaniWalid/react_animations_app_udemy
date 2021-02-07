import React, { Component } from "react";
// Use this cmd: 'npm install react-transition-group --save' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState(prevState => ({ showBlock: !prevState.showBlock }))}
        >
          Toggle
        </button>
        <br />
        {/* <Transition /> Component => We use it to control the display of elements inside it (like the '<div />') 
          => it manage 4 main states :: 'entering' || 'entered' || 'exiting' || 'exited' */}
        <Transition
          in={this.state.showBlock} // Decide whether the elements wrapped inside the '<Transition /> Component' should be 'shown or not'
          timeout={1000} // Determines how longs this animation should be played => transition:: from 'entering' to 'entered' OR from 'exiting' to 'exited'
          mountOnEnter // if: 'in === true' => Add the 'Wrap element' ('<div />') to the 'DOM'
          unmountOnExit // else (if: 'in === false'): => Remove the 'Wrap element' ('<div />') from the 'DOM'
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {state => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1
              }}
            />
          )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;