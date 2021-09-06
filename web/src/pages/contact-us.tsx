import React from "react";
import { Layout } from "../layout";
import SimpleSlider from "../components/Slideshow";
import { makeStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";
const useStyles = makeStyles({
    container: {
        width: "85%",
        marginTop: "3rem",
        margin: "auto",
        marginBottom : "3rem"
    },

    bannerShopNow: {
        '&:hover' : {
            background : "#4a5863",
            transitionDuration : "200ms"
        },
        background: "#4D5E6B",
        color: "white",
        fontFamily : "Poppins",
        fontSize : "1.2rem",
        border: "none",
        padding : "0.5em 3em",
        marginTop : "1.5rem",
        "& > a" : {
            color : "white",
            textDecoration : "none",
        }
    },
    header: {
        fontSize: "2rem",
        marginBottom: "1rem",
    },
    padded: {
        marginBottom: "1.5rem",
    },
    form: {
        width: "60vw",
        minWidth: "500px",
    },
    rowForm: {
        display: "flex",
        justifyContent: "space-between",
        "& > * ": {
            flexGrow: 1,
            marginRight: "2rem",
        },
        "& > *:last-child": {
            marginRight: "0rem",
        },
    },
});
const ContactUs = () => {
    //name
    //phone number
    //email <address>
    // company name (optional)
    // message
    const classes = useStyles();
    return (
        <Layout>
            <SimpleSlider hideAboutUs={true} />
            <div className={classes.container}>
                <div className={classes.header}> Contact Us </div>
                <form className={classes.form}>
                    <div className={classes.rowForm}>
                        <TextField
                            id="name"
                            label="First Name"
                            variant="outlined"
                            className={classes.padded}
                            fullWidth
                        />
                        <TextField
                            id="name"
                            label="Last Name"
                            variant="outlined"
                            className={classes.padded}
                            fullWidth
                        />
                    </div>
                    <div className={classes.rowForm}>
                        <TextField
                            id="email-address"
                            label="Email Address"
                            variant="outlined"
                            className={classes.padded}
                            fullWidth
                        />
                    </div>
                    <div className={classes.rowForm}>
                        <TextField
                            id="name"
                            label="Company"
                            variant="outlined"
                            className={classes.padded}
                        />
                        <TextField
                            id="name"
                            label="Phone"
                            variant="outlined"
                            className={classes.padded}
                        />
                    </div>

                    <TextField
                        id="email-address"
                        label="Your Message"
                        variant="outlined"
                        rows={6}
                        fullWidth
                        maxRows={15}
                        multiline={true}
                    />
                    <button className={classes.bannerShopNow} type="submit">SUBMIT</button>
                </form>
            </div>
        </Layout>
    );
};
export default ContactUs;
