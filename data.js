export default (
  [{
    title: "Python Local Variables",
    description: "When we declare variables inside a function, these variables will have a local scope (within the function). We cannot access them outside the function. When we declare variables inside a function, these variables will have a local scope (within the function). We cannot access them outside the function.",
    code: `
    def greet():

    # local variable
    message = 'Hello'
    
    print('Local', message)

    greet()

    # try to access message variable 
    # outside greet() function
    print(message)
    `
  },
  {
    title: "Python Global Variables",
    description: `
    In Python, a variable declared outside of the function or in global scope is known as a global variable. This means that a global variable can be accessed inside or outside of the function.`,
    code: `
    # declare global variable
    message = 'Hello'

    def greet():
        # declare local variable
        print('Local', message)

    greet()
    print('Global', message)
    `
  },
  {
    title: "Python Local Variables",
    description: "When we declare variables inside a function, these variables will have a local scope (within the function). We cannot access them outside the function.",
    code: `
    def greet():

    # local variable
    message = 'Hello'
    
    print('Local', message)

    greet()

    # try to access message variable 
    # outside greet() function
    print(message)
    `
  },
  {
    title: "Python Local Variables",
    description: "When we declare variables inside a function, these variables will have a local scope (within the function). We cannot access them outside the function. ",
    code: `
    def greet():

    # local variable
    message = 'Hello'
    
    print('Local', message)

    greet()

    # try to access message variable 
    # outside greet() function
    print(message)
    `
  }
  ]
)