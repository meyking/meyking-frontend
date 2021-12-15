import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import logo from '../images/logo.png'
import UnderlinableLink from './UnderlinableLink'

const useStyles = makeStyles({
    root: {},
    navContainer: {
        padding: '1.2em',
        display: 'flex',
        alignItems: 'center',
    },
    linkContainer: {
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        '& > * ': {
            marginLeft: '3rem',
            color: 'black',
            textDecoration: 'none',
        },
    },
    logo: {
        height: '4em',
        width: '4em',
        display: 'block',
        flexBasis: 1,
    },
    logoText: {
        fontSize: '1em',
        fontFamily: 'Montserrat',
        fontWeight: 600,
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default () => {
    const classes = useStyles()
    return (
        <nav className={classes.root}>
            <div className={classes.navContainer}>
                <div className={classes.logoContainer}>
                    <img src={logo} className={classes.logo} />
                    <span className={classes.logoText}>MEYKING</span>
                </div>
                <div className={classes.linkContainer}>
                    <UnderlinableLink to="/home">Home</UnderlinableLink>
                    <UnderlinableLink to="/products">
                        Our Products
                    </UnderlinableLink>
                    <UnderlinableLink to="/about-us">
                        About Us
                    </UnderlinableLink>
                    <UnderlinableLink to="/contact-us">
                        Contact Us
                    </UnderlinableLink>
                </div>
            </div>
        </nav>
    )
}
