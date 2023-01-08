let addToDoButton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputField');
addToDoButton.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener('dblclick', function () {
        todocontainer.removeChild(paragraph);
    });
});
//# sourceMappingURL=script10.js.map