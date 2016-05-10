import api from '../api/index'
import config from '../api/config'

export const addTask = makeAction('ADD_TASK')
export const toggleActive = makeAction('TOGGLE_ACTIVE')
export const toggleTask = makeAction('TOGGLE_TASK')
export const editTaskTitle = makeAction('EDIT_TASK_TITLE')
export const editTaskContent = makeAction('EDIT_TASK_CONTENT')
export const deleteTask = makeAction('DELETE_TASK')
export const updateActiveTask = makeAction('SET_ACTIVE_TASK')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

export const getTasksData = ({dispatch}) => {
  api.getData(config.tasksUrl, (tasks) => {
    dispatch('RECIEVE_TASKS', tasks)
  })
}
export const getUserData = ({dispatch}) => {
  api.getData(config.userDataUrl, (user) => {
    dispatch('RECIEVE_USER', user)
  })
}
