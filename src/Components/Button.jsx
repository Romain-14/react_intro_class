import React from "react";

function Button(props) {
    return (
        <button onClick={props.onClick}>
            {props.children}
            {props.val}
        </button>
    );
}

export default Button;
