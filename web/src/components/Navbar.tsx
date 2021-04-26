import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import logo from '../images/logo.png'

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

const useUnderlinableStyles = makeStyles({
    line: {
        background: 'transparent',
        width: '0%',
        transitionDuration: '800ms',
        height: '.2em',
    },
    container: {
        display: 'flex',
        cursor: 'pointer',
        padding: '1em',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            '& > *': {
                width: 'calc(100% + .8em)',
                transitionDuration: '.7s',
                background: '#4D5E6B',
            },
        },
    },
    link: {
        textAlign: 'center',
        color: 'black',
        background: 'none !important',
        fontWeight: 400,
        textDecoration: 'none',
    },
})
const UnderlinableLink = (props) => {
    const classes = useUnderlinableStyles()
    return (
        <div className={classes.container}>
            <Link {...props} className={classes.link} />
            <div className={classes.line}></div>
        </div>
    )
}

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
                    <UnderlinableLink to="/contact-us">
                        Contact Us
                    </UnderlinableLink>
                    <UnderlinableLink to="/contact-us">EN/FR</UnderlinableLink>
                </div>
            </div>
        </nav>
    )
}
