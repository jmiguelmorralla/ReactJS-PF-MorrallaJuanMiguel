import React from 'react';
import './styles.css';

export default function Button(props) {
    const stylesButton = {
        backgroundColor: props.color,
        color: "white",
        borderRadius: "4px",

    }
  return (
    <button onClick={props.onClickButton} style={stylesButton}>{props.children}</button>
  )
}
