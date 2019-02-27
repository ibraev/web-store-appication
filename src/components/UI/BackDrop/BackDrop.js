import React from 'react';

import Spinner from "../Spinner/Spinner";

import './Backdrop.css';

const Backdrop = props => {
    let backdrop = (
        <div onClick={props.onClick} className="Backdrop">
            {props.loading && <Spinner/>}
        </div>
    );

    return props.show ? backdrop : null;
};

export default Backdrop;
