import React from 'react'
import style from '../../styles/modules/header.module.scss'

const Header = () => {
  return (
    <div className={style.header}>
      <h1 className={style.header__heading}>To Do List</h1>
    </div>
  )
}

export default Header
