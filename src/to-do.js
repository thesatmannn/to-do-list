const todos = (() => {
    class Task {
        constructor(title, description, date, priority) {
            this.title = title;
            this.description = description;
            this.date = date;
            this.priority = priority;
        }
    }

    function addTask(title, description, date, priority) {
        const task = new Task(title, description, date, priority);
    }
 
