new Vue({
    el: '#root',
    data: {
        todo: '',
        index: 0,
        todoList: []
    },
    methods: {
        handleSubmit() {
            if (this.todo) {
                this.todoList.push({id: this.index, todo: this.todo})
                this.todo = ''
                this.index++
            }
        },
        deleteToDo (id) {
            this.todoList = this.todoList.filter(t => t.id !== id)
        }
    },
})