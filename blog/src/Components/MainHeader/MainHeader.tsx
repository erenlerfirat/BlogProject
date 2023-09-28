import classes from './MainHeader.module.css';
import Navigation from './Navigation';

const MainHeader = (props : any) => {
  return (
    <header className={classes.header}>
       <Navigation/>
    </header>
  );
};

export default MainHeader