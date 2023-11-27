import React from "react";

export default function Hero1(props){
  return(
    <div className="Main">
      <h2 className="main-title">{props.item.title}</h2>
      <p>{props.item.description}</p>
      <div className="code-container">
        <pre>{props.item.code}</pre>
        <button className="main-btn">Run Code</button>
      </div>
    
    </div>
  )
}