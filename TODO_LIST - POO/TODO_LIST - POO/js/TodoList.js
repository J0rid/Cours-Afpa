import LocalStroage from "./LocalStorage.js";
import Dom from "./Dom.js";
import EventHandler from "./EventHandler.js";

class TodoList {

    // CRUD (CREATE READ UPDATE DELETE)

    constructor(btn_form, form, btn_clear_all, todo_list, btn_remind, count) {
        this.btn_form = btn_form; 
        this.form = form; 
        this.btn_clear_all = btn_clear_all; 
        this.todo_list = todo_list; 
        this.btn_remind = btn_remind;
        this.count = count;

        // capter les evenements autour de la todo list
        EventHandler.triggerEvent(this.form,'submit', this.create);
        EventHandler.triggerEvent(this.btn_clear_all,'click', this.deleteAll);
        EventHandler.triggerEvent(this.btn_remind,'click', this.toggleReminder);

        
    }

    getAll() {
        return LocalStroage.findAll('todos')
        
    }

    /**
     * Met a jour
     * @param {*} todos 
     */
    updateTodoList(todos){

        Dom.modifyHtml(this.todo_list,'');

        todos.forEach(function (todo) {
            let todoHTML =Dom.createElementsWithInnerElem(
                [ 'li', `todo-item ${ todo.reminder ? 'reminder' : '' }`, todo.id], 
                [ 
                 ['span', '', `${todo.name} - ${todo.date}`],
                 ['span', 'delete-btn', '✖']
                ]);

            Dom.appendChild(this.todo_list, todoHTML);
        });

    }

    loadTodos(){
        let todos = this.getAll();
        this.updateTodoList(todos);
        
    }

    create () {

        // je récupère les valeurs soumises de mon formulaire
        let text = Dom.getValueElement('task');
        let date = Dom.getValueElement('due-date');
        let reminder = Dom.getValueCheckElement('reminder');

        let newTodo = new Todo(text, date, reminder);

        this.addTodoToList(newTodo);

    }

    addTodoToList (newTodo){

         // je récupère les données actuellement dans mon localStorage
         let listTodos = this.getAll();
         listTodos.push(newTodo);
         LocalStroage.update('todos', listTodos);
         this.form.reset();
         
         this.updateTodoList(listTodos);
    }

    delete() {

        //ES6
    let listTodos = this.getAll();

    let listTodosUpdated = listTodos.filter(function(todo) {
        return todo.id != id; // retourne moi dans ma nouvelle liste, les todo de listTodos dont l'id n'est pas égal à l'id que j'ai en argument et que je souhaite supprimer
    });

    LocalStroage.setItem("todos", JSON.stringify(listTodosUpdated));
    this.updateTodoList(listTodosUpdated);
    this.updateCounter();

    }

    deleteAll() {

        CLEAR_ALL.addEventListener("click", function() {

            LocalStroage.deleteAll("todos");
            this.updateTodoList([]); // recharge la liste
            this.length(); // remet à jour le compteur
    
        });

    }

    length() {
        let listTodos = this.getAll();
        Dom.modifyHtml (this.count, listTodos.length);
        
        if(listTodos.length > 0){
            Dom.toggleClass(this.btn_clear_all, 'hide', 'remove');
        } else{
            Dom.toggleClass(this.btn_clear_all, 'hide', 'add');
        }
    }

    toggleReminder(){

        Dom.toggleClass(this.todo_list, 'filtered', 'toggle');
    
            let filtered = Dom.containsClass(this.todo_list, 'filtered');
            let listTodos = this.getAll();
            let listFiltered;
            if(filtered) {
    
                listFiltered = listTodos.filter(function(todo) {
                    return todo.reminder;
                });
            
            } else {
                listFiltered = this.getAll();
            }
    
        this.updateTodoList(listFiltered);
        Dom.toggleElem(this.btn_remind, 'bg-green', 'bg-blue', filtered ? 'Tous' : 'Par rappel');
        EventHandler.triggerEvent(todoHTML, 'dblclick',)
    
        
    }

}

export default TodoList