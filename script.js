var todoNew = document.querySelector('.todo-new');
var todoList = document.querySelector('.todo-list');

function NewLi(text) {
	var li = document.createElement('li');
	var todoInput = document.createElement('input');
	todoInput.className = 'todo-input';
	var type = document.createAttribute('type');
	type.value = 'checkbox';
	todoInput.setAttributeNode(type);
	var todoLabel = document.createElement('label');
	todoLabel.textContent = todoNew.value;
	todoNew.value = ' ';
	var deleteBtn = document.createElement('button');
	deleteBtn.className = 'todo-close';

	deleteBtn.addEventListener('click', function(e) {
		todoList.removeChild(li);
	});

	todoList.appendChild(li);
	li.appendChild(todoInput);
	li.appendChild(todoLabel);
	li.appendChild(deleteBtn);
};

todoNew.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		NewLi(todoNew.value);
	}
});