import { useAppContext } from '../../context/appContext';

import classes from './Button.module.css';

const Button = (props) => {
  const { currentSelectedPage } = useAppContext();

  const handleClick = () => {
    props.onSelectPage(props.btnText);
  };

  return (
    <button
      className={
        currentSelectedPage === props.btnText
          ? `${classes.btn} ${classes.active}`
          : classes.btn
      }
      onClick={handleClick}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
