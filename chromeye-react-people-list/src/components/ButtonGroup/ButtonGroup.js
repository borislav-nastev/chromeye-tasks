import Button from '../Button/Button';

import { useAppContext } from '../../context/appContext';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import classes from './ButtonGroup.module.css';

const ButtonGroup = () => {
  const {
    countOfBtn,
    onSelectPage,
    onMoveToPrevPage,
    onMoveToNextPage,
    currentSelectedPage,
  } = useAppContext();

  const buttonGroupContent = [];

  for (let i = 1; i <= countOfBtn; i++) {
    buttonGroupContent.push(
      <Button btnText={i} key={i} onSelectPage={onSelectPage} />
    );
  }

  return (
    <div className={classes.btnGroup}>
      <div className={classes.btnContainer}>{buttonGroupContent}</div>
      <div className={classes.actions}>
        {currentSelectedPage !== 1 && (
          <span className={classes.actionItem}>
            <BsChevronLeft onClick={onMoveToPrevPage} />
          </span>
        )}
        {countOfBtn !== 0 && currentSelectedPage !== countOfBtn && (
          <span className={classes.actionItem}>
            <BsChevronRight onClick={onMoveToNextPage} />
          </span>
        )}
      </div>
    </div>
  );
};

export default ButtonGroup;
