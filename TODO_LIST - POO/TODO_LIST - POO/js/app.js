const BTN_TOGGLE_FORM = document.querySelector(".toggleForm");
const TODO_FORM = document.querySelector(".todo-form");
const COUNT = document.querySelector("#count");
const CLEAR_ALL = document.querySelector(".clear-all");
const TODO_LIST = document.querySelector(".todo-list");
const REMIND_ALL = document.querySelector(".reminder-all");




function deleteTodo() {

    console.log("deleteTodo");
    const LIST_DELETE_BTN = document.querySelectorAll(".delete-btn");

    LIST_DELETE_BTN.forEach(function(btn) {

        btn.addEventListener("click", function() {
    
            this.parentNode.remove(); // je supprime le html du todo
            handleDeleteTodo(this.parentNode.id);
            getTodosCount(); // remettre à jour le compteur
    
        });

    });

}



function getTodosCount() {

    let listTodos = JSON.parse(localStorage.getItem("todos")) || [];
    COUNT.innerHTML = listTodos.length;

    if(listTodos.length > 0) {
        CLEAR_ALL.classList.remove("hide");
    } else {
        CLEAR_ALL.classList.add("hide");
    }

}


function toggleShowForm() {

    BTN_TOGGLE_FORM.addEventListener("click", function() {

        TODO_FORM.classList.toggle("hide");

        if(TODO_FORM.classList.contains("hide")) {
            this.classList.add("bg-green");
            this.classList.remove("bg-red");
            this.innerText = "Montrer";
        } else {
            this.classList.remove("bg-green");
            this.classList.add("bg-red");
            this.innerText = "Cacher";
        }

    });


}



function toggleReminder() {

    let TODO_LIST_ITEM = document.querySelectorAll(".todo-list li");


    TODO_LIST_ITEM.forEach(function(todo) {

        todo.addEventListener("dblclick", function() {

            // je vais devoir récupérer l'id du todo concerné
            let id = this.id;

            // ici je récupère tous mes todos
            let listTodos = JSON.parse(localStorage.getItem("todos")) || [];

            // ici je parcours chaque todo que je renvois dans un nouvel array
            let listTodosUpdated = listTodos.map(function(todo) {

                // si le todo dans l'itération
                // son id c'est celui sur lequel j'ai double cliqué
                // ajoute dans listTodosUpdated ce todo, mais pour la propriété reminder je veux l'inverse de sa valeur actuelle
                // si le todo de l'itération, son id c'est pas celui sur lequel j'ai double cliqué, renvois le mois sans le modifier
                return todo.id == id ? {...todo, reminder : !todo.reminder} : todo

            });

            localStorage.setItem("todos", JSON.stringify(listTodosUpdated));
            loadTodos();



        });
        
    });

}

// objectif c'est de n'afficher que les todos qui ont un rappel
function filterTodos() {




}

function handleFilterButtonChange(filtered) {
    if(filtered) {
        REMIND_ALL.classList.remove("bg-green");
        REMIND_ALL.classList.add("bg-blue");
        REMIND_ALL.innerHTML = "Tous";
    } else {
        REMIND_ALL.classList.remove("bg-blue");
        REMIND_ALL.classList.add("bg-green");
        REMIND_ALL.innerHTML = "Par rappel";
    }
}


