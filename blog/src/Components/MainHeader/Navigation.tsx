import classes from './Navigation.module.css';

const Navigation = (props:any) => {
  return (
    
    <header className={classes.header}>
		<h1 className="your-logo-area">MY</h1>
		<nav>
			<ul className={classes["nav_links"]}>
				<li><a href="#">Home</a></li>
				<li><a href="#">Blog</a></li>
				<li><a href="#">About</a></li>
			</ul>
      </nav>      
      <button className={classes.btn}>Contact</button>      
	</header>
  );
};

export default Navigation;
