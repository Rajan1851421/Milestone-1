const addItem = () => {
    const input = document.getElementById('item-input');
    const list = document.getElementById('item-list');

    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.innerText = input.value;

    // Append the new list item to the end of the list
    list.appendChild(listItem);

    // Clear the input field
    input.value = ``;
}