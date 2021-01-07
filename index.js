//Steps for approaching JS labs:
//1. Identify which elements on the DOM you're going to need to 1) Select values from 2) Add Elements To 3) Remove Elements From 4) Generally need to add an event listener to

//2. Add Event Listeners to the appropriate elements

//3. Write the callback functions

let todoForm = document.getElementById('todo-form')
let todoInput = document.querySelector("#todo-input")
let todoList = document.querySelector("#todo-list")

//We call functions whose references are passed as arguments to methods to be used at a later time CALLBACK FUNCTIONS

todoForm.addEventListener('submit', handleSubmit)
todoList.addEventListener('click', handleClickTodo)
//All functions that are passed as callbacks to an addEventListener method are always passed the event as an argument

//Form submissions always automatically trigger a re-render
//Historically we've used forms to always make new network requests
//We don't use them to make network requests when we're making JS applications
//JS will handle network requests for us now
function handleSubmit(e){
  e.preventDefault()
  let todo = todoInput.value
  let todoHTML = `<li>${todo}</li>`
  todoList.innerHTML += todoHTML
  todoInput.value = ""
}

//One Event Listener To Rule Them All
//If you have several elements housed in the same parent element and they all need to respond to the same event in the same way, put the event ON THE PARENT and use the e.target attibute to determine which element in particular needs the event applied to

//This is possible because of something called EVENT BUBBLING

function handleClickTodo(e){
  console.log("One of the LIs was clicked! In particular, it was:", e.target)
  let selectedElement = e.target
  selectedElement.remove()
}






//
