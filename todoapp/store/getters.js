import { tomorrow } from '../utils/shared'

export default {
  currentTodo (state) {
    return state.todos[state.currentIndex]
  },
  todayTasks (state) {
    const tasks = []
    state.todos.forEach(todo => {
      todo.tasks.forEach(task => {
        if (task.date <= tomorrow && !task.done && !task.deleted) {
          tasks.push(task)
        }
      })
    })
    return tasks
  }
}