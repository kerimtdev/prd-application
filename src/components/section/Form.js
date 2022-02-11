import React, { useState } from 'react'
import style from '../../styles/modules/form.module.scss'

const Form = ({ onSubmit }) => {
  const [content, setContent] = useState('')

  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit({ content })
        setContent('')
      }}
    >
      <input
        className={style.form__input}
        type="text"
        placeholder="Enter task..."
        value={content}
        required={true}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className={style.form__button} type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form
