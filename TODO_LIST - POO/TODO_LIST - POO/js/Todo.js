class Todo {

    static idCount = 0 // variable de classe (n'appartient pas aux objets mais à la classe)

    constructor(text, date, reminder){

        this.id = Todo.idCount++; // membre d'instance
        this.text = text;
        this.date = date;
        this.reminder = reminder;
     
        // capter les evenements autour du todo
        
    }
}