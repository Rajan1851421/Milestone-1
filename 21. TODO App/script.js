// Select the input field and the todo list


const handleToDo = () => {
    const inputVal = document.getElementById("todo-input").value;
    let validation=document.getElementById('ShowValidation');

    if (inputVal === ""){
        validation.innerText="Please Enter ToDo Name"
    }
    else{

        const newTodoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    // Function to add a new todo item to the list

    // Get the value of the input field
    const newTodo = newTodoInput.value;

    // Create a new list item and append it to the todo list
    const listItem = document.createElement("li");
    listItem.textContent = newTodo;
    todoList.appendChild(listItem);

    // Clear the input field
    newTodoInput.value = "";
    }
}