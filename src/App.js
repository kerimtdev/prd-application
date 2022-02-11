import React, { useReducer } from 'react'
import Wrapper from './layouts/Wrapper'
import Header from './components/section/Header'
import Form from './components/section/Form'
import {
  reducer,
  initialState,
  defaultInitializer,
  actionTypes,
} from './store/todo'
import List from './components/section/List'

const AppContainer = () => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    defaultInitializer
  )

  const createTodo = (payload) => {
    dispatch({
      type: actionTypes.CREATE_TODO_ITEM,
      payload,
    })
  }

  const completeTodo = (payload) => {
    dispatch({
      type: actionTypes.UPDATE_TODO_ITEM,
      payload,
    })
  }

  const clearCompletedTodos = () => {
    dispatch({
      type: actionTypes.CLEAR_COMPLETED_ITEMS,
    })
  }

  return (
    <Wrapper>
      <Header />
      <Form onSubmit={createTodo} />
      <List
        items={state.items || []}
        onComplete={completeTodo}
        onClear={clearCompletedTodos}
      />
    </Wrapper>
  )
}

export default AppContainer
