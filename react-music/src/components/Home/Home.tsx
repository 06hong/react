import React from 'react';
//mport gives us access to the React framework. From here we can create our Functional Component.
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import bubbles from '../../assets/images/bubbles.jpeg';
import { Link } from 'react-router-dom';

// A Prop is an attribute or child of a component, and often is represented as a single Object. With this code, we are setting a structure for the type of data we expect to be inside of the Home components props.
interface Props{
    title: string;
}
export const Home = ( props:Props) => {

    // New classes variable code
    const classes = useStyles();
    //When this function is called, this will expose the object within allowing us to use the classes. For example our first div displays className={classes.root} which gives us access to the CSS properties padding: 0 margin: 0 .
    

    return (
        <div className={classes.root}>
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Brand</a>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to='/' href="" className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard" href="" className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/signin" href="" className={classes.nav_a}>SignIn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <p>I like music</p>
                    <Button color='primary' variant="contained">Click Me</Button>
                </div>
            </main>
        </div>
    )
}
//to show in our first Component.
//we haven't set that up to be shown to the project yet. Let's fix that. First, we export our Home component into index.ts

//...interface above

// New Make Styles Code
const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bubbles});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
    
})