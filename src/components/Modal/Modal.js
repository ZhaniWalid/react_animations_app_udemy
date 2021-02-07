import React from "react";
// Use this cmd: 'npm install react-transition-group --save' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = props => {
  return (
    // <Transition /> Component => We use it to control the display of elements inside it (like the '<div />') 
    //       => it manage 4 main states :: 'entering' || 'entered' || 'exiting' || 'exited'
    <CSSTransition 
        mountOnEnter // if: 'in === true' => Add the 'Wrap element' ('<div />') to the 'DOM'
        unmountOnExit // else (if: 'in === false'): => Remove the 'Wrap element' ('<div />') from the 'DOM'
        in={props.show} // Decide whether the elements wrapped inside the '<Transition /> Component' should be 'shown or not'
        timeout={animationTiming} // Determines how longs this animation should be played => transition:: from 'entering' to 'entered' OR from 'exiting' to 'exited'
        // CSS 'ModalOpen' & 'ModalClosed' classes related to [Modal.css] file
        // 'enter', 'enterActive', 'exit', 'exitActive' => Properties of '<CSSTransition />'
        classNames={{
            enter: '',
            enterActive: 'ModalOpen',
            exit: '',
            exitActive: 'ModalClosed'
        }}>
          <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
    </CSSTransition>
  );
};

export default modal;