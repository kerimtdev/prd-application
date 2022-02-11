export const Types = Object.freeze({
  CREATE_TODO_ITEM: 'CREATE_TODO_ITEM',
  DELETE_TODO_ITEM: 'DELETE_TODO_ITEM',
  UPDATE_TODO_ITEM: 'UPDATE_TODO_ITEM',
  CLEAR_COMPLETED_ITEMS: 'CLEAR_COMPLETED_ITEMS',
})

export const Actions = {
  /**
   * @param {Object} ctx
   * @param {Object} payload
   * @return {Object}
   */
  CreateTodoItem: (ctx, payload) => {
    const item = {
      id: Date.now(),
      completed: false,
      ...payload,
    }

    return {
      ...ctx.state,
      items: [item, ...ctx.state.items],
    }
  },

  /**
   * @param {Object} ctx
   * @param {Number} payload
   * @return {Object}
   */
  DeleteTodoItem: (ctx, payload) => {
    return {
      ...ctx.state,
      items: ctx.state.items.filter((curr) => curr.id !== payload),
    }
  },

  /**
   * @param {Object} ctx
   * @param {Object} payload
   * @return {Object}
   */
  UpdateTodoItem: (ctx, payload) => {
    const modifiedItems = [...ctx.state.items]
    const foundItem = modifiedItems.some((curr) => curr.id === payload.id)

    if (foundItem) {
      const index = modifiedItems.findIndex((curr) => curr.id === payload.id)
      modifiedItems[index] = {
        ...foundItem,
        ...payload,
      }

      return {
        ...ctx.state,
        items: modifiedItems,
      }
    }

    return ctx.state
  },

  /**
   * @param {Object} ctx
   * @return {Object}
   */
  ClearCompletedItems: (ctx) => {
    return {
      ...ctx.state,
      items: ctx.state.items.filter((curr) => !curr.completed),
    }
  },
}
