import React from 'react'
import style from '../../styles/modules/list.module.scss'
import BlankIllustration from '../svg/Blank'
import classNames from 'classnames'

const List = ({ items, onComplete, onClear }) => {
  return (
    <div className={style.body}>
      <div className={style.list__container}>
        {items.length === 0 && (
          <div className={style.list__empty}>
            <BlankIllustration width="10rem" />
            <span className={style.list__empty_text}>
              There are no items in the list.
            </span>
          </div>
        )}

        {items.length !== 0 &&
          items.map((curr, i) => (
            <div
              key={i}
              className={style.list__item}
              onClick={() =>
                onComplete({ ...curr, completed: !curr.completed })
              }
            >
              <p
                className={classNames(style.list__item_content, {
                  [style.list__item_completed]: curr.completed,
                })}
              >
                {curr.content}
              </p>
            </div>
          ))}
      </div>

      <button
        className={style.body__button}
        disabled={!items.some((curr) => curr.completed)}
        onClick={onClear}
      >
        Clear Completed
      </button>
    </div>
  )
}

export default List
