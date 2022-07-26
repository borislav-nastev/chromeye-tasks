import Input from '../Input/Input';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Select from '../Select/Select';

import classes from './PeopleFilters.module.css';

const PeopleFilters = () => {
  return (
    <div className={classes.filterContainer}>
      <Input />
      <ButtonGroup />
      <Select />
    </div>
  );
};

export default PeopleFilters;
