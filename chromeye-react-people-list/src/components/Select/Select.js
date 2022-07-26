import { useAppContext } from '../../context/appContext';

import classes from './Select.module.css';

const Select = () => {
  const { onSelectPeoplePerPage, peoplePerPage } = useAppContext();

  return (
    <div className={classes.selectContainer}>
      <select
        name='peoplePerPage'
        id='per-page'
        onChange={onSelectPeoplePerPage}
        value={peoplePerPage}
        className={classes.select}
      >
        <option value='1'>---1---</option>
        <option value='3'>---3---</option>
        <option value='5'>---5---</option>
        <option value='all'>All</option>
      </select>
      <label htmlFor='per-page' className={classes.label}>
        Per Page
      </label>
    </div>
  );
};

export default Select;
