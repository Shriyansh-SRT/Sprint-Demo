import React from "react";

export default function Hero(){
  return (
    <section className="Main">
      <h2 className="main-title">Python Local Variables</h2>
      <p>When we declare variables inside a function, these variables will have a local scope (within the function). We cannot access them outside the function.</p>
      <p>These types of variables are called local variables. For example,</p>
      <pre>
def greet():
    # local variable
    message = 'Hello'
    print('Local', message)

greet()

# try to access message variable 
# outside greet() function
print(message)
  </pre>

    </section>
  )
}