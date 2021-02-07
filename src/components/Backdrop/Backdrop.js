import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    // CSS 'Backdrop' class => Related to [Backdrop.css] file :: 
    // ==> if: 'props.show == true' then use the CSS 'BackdropOpen' class
    //     else: use the CSS 'BackdropClosed' class
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={cssClasses.join(' ')}></div>;
};

export default backdrop;