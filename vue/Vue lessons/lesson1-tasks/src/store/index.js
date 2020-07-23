import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    //Создаём задачу Create.vue
    createTask(state, task){
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    //Обновляем задачу Task.vue
    updateTask(state, {id,title,description,checked}){
      const tasks = state.tasks.concat()
      const task = tasks.find(t => t.id === id)

      tasks[id] = {...task, title,description,checked}

      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    //Удаляем задачу на List.vue
    deleteTask(state, id){
      const tasks = state.tasks.concat()
      tasks.splice(id, 1);
      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task){
      commit('createTask',task)
    },
    updateTask({commit}, task){
      commit('updateTask',task)
    },
    deleteTask({commit}, id){
      commit('deleteTask',id)
    }
  },
  getters:{
    tasks: state => state.tasks,
    taskById: state => id => state.tasks.find(t=> t.id === id)
  }
})
