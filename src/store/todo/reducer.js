import { Actions, Types } from './action'

/**
 * @param state
 * @param action
 * @return {*}
 */
export const reducer = (state, action) => {
  const context = { state, action }
  let modifiedState = { ...state }

  switch (action.type) {
    case Types.CREATE_TODO_ITEM:
      modifiedState = Actions.CreateTodoItem(context, action.payload)
      break

    case Types.DELETE_TODO_ITEM:
      modifiedState = Actions.DeleteTodoItem(context, action.payload)
      break

    case Types.UPDATE_TODO_ITEM:
      modifiedState = Actions.UpdateTodoItem(context, action.payload)
      break

    case Types.CLEAR_COMPLETED_ITEMS:
      modifiedState = Actions.ClearCompletedItems(context)
      break

    default:
      throw new Error(`Unknown action: ${action.type}`)
  }

  return modifiedState
}
