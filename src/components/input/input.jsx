import React from 'react';
import styles from './input.module.css';
import classNames from 'classnames';

export function Input({title, placeholder, width, setFilter}) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{title}</p>
            <input onChange={e => setFilter(e.target.value)}
                   className={classNames(styles.input, width ? styles.input370px : styles.input270px)}
                   placeholder={placeholder}/>
        </div>
    );
}