import { useState, useEffect, useRef } from 'react';

import { useAppContext } from '../../context/appContext';

import classes from './Input.module.css';

const Input = () => {
  const { onFilterPeople } = useAppContext();
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setEnteredFilter(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        onFilterPeople(enteredFilter);
      }
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onFilterPeople]);

  return (
    <div className={classes.inputGroup}>
      <input
        type='text'
        value={enteredFilter}
        onChange={handleChange}
        ref={inputRef}
        className={classes.input}
        id='search'
        placeholder=' '
      />
      <label htmlFor='search' className={classes.label}>
        Enter Keyword
      </label>
    </div>
  );
};

export default Input;
