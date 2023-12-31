import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    
    <header className={classes.header}>
		<h1 className="your-logo-area">MY BLOG</h1>
		<nav>
			<ul className={classes["nav_links"]}>
				<li><a href="https://github.com/erenlerfirat">Home</a></li>
				<li><a href="https://github.com/erenlerfirat">Blog</a></li>
				<li><a href="https://github.com/erenlerfirat">About</a></li>
			</ul>
      </nav>      
      <button className={classes.btn}>Contact</button>      
	</header>
  );
};

export default Navigation;
