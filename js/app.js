function createTodo(todoText) {

    // DECLARATION DOM
    
    // const divTodo = document.createElement('div');
    const divTodo = document.createElement('div'); 
    const divPrepend = document.createElement('div');
    const divText = document.createElement('div');
    const inputCheckbox = document.createElement('input');
    const spanLg = document.createElement('span');
    const divAppend = document.createElement('div');
    const btnDelete = document.createElement('button');
    const spanFas = document.createElement('span');

    // IMBRICATION

    // divTodo.appendChild(divPrepend);
    divTodo.appendChild(divPrepend);
    divTodo.appendChild(spanLg );
    divTodo.appendChild(divAppend);

    divPrepend.appendChild(divText);

    divText.appendChild(inputCheckbox);
  
    divAppend.appendChild(btnDelete);

    btnDelete.appendChild(spanFas);

    // CONFIGURATION
    // divTodo.className = 'todo col-sm-10 input-group mb-3';
    divTodo.className = 'col-sm-10 input-group mb-3 todo';
    divText.className = 'input-group-text';
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'check';
    inputCheckbox.className = 'checkbox';
    // labelCheckbox.htmlFor = 'check';
    // spanText.className = 'fas fa-image';
    spanLg.className = 'form-control form-control-lg';
    spanLg.textContent = todoText;

    divAppend.className='input-group-append';

    spanFas.className='fas fa-trash-alt';

    btnDelete.className = 'btDelete input-group-text text-danger';
    btnDelete.onclick = deleteTodo.bind(divTodo, inputCheckbox);

    document.querySelector('.todoList').appendChild(divTodo);
}
