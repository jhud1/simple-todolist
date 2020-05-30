    let addTaskField = document.getElementById('add-todo');
    let tasks = document.getElementById('tasks');
    let trash = document.querySelectorAll('i');



    // create a todo
    addTaskField.addEventListener('keypress', function(event){
    if(event.which === 13 && this.value != ''){
        let li = document.createElement("li");
        let i = document.createElement("i");
        let span = document.createElement("span");
        i.classList = "fas fa-trash-alt";
        li.classList = "regular";
        li.innerHTML = this.value;
        span.appendChild(i);
        li.appendChild(span);
        tasks.append(li);
        li.addEventListener('click', function(){
            this.classList.toggle('completed');
        });
        span.addEventListener('click', function(){
            li.classList.add('gone');
        });
        this.value = '';
    }
    });