import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Hero1 from "./components/Hero1";
import data from "../data";

export default function App(){
  let info = data.map((item) => {
    return(
      <Hero1 
        item = {item}
      />
    )
  })
  return (
    <div className="container">
      <Header />
      <section>
        {info}
      </section>
    </div>
  )
}