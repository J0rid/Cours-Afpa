import LocalStroage from "./LocalStorage.js";
import Dom from "./Dom.js";

class TodoList {

    // CRUD (CREATE READ UPDATE DELETE)

    constructor(btn_form, form, btn_clear_all, todo_list, btn_remind) {
        this.btn_form = btn_form; 
        this.form = form; 
        this.btn_clear_all = btn_clear_all; 
        this.todo_list = todo_list; 
        this.btn_remind = btn_remind;
    }

    getAll() {

    }

    create () {

        // je récupère les données actuellement dans mon localstorage
        let listTodos = LocalStroage.findAll('todos');
        listTodos.push(newTodo);
        LocalStroage.update('todos', listTodos);
        this.form.reset();
        
        // je créé le html pour ma liste de todo
        // ca me renvoit un li avec deux spans à l'intérieur
        let todoHTML = Dom.createElementsWithInnerElem(
            [ 'li', `todo-item ${ newTodo.reminder ? 'reminder' : '' }`, newTodo.id], 
            [ 
                ['span', '', `${newTodo.name} - ${newTodo.date}`],
                ['span', 'delete-btn', '✖']
            ] );

        // j'ajoute le todo à ma liste de todo dans le html
        Dom.appendChild(this.todo_list, todoHTML);

    }

    delete() {


    }

    deleteAll() {


    }

    length() {

    }

}