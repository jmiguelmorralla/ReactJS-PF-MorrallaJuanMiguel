import React from 'react';
import './styles.css';

export default function Button(props) {
    const stylesButton = {
        backgroundColor: props.color,
        color: "white",
        borderRadius: "4px",
        padding: ".5rem",
        fontWeight: "600",
        

    }
  return (
    <button onClick={props.onClickButton} style={stylesButton}>{props.children}</button>
  )
}
