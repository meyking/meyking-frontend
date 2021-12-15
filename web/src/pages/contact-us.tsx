import React from "react";
import Grid from "@material-ui/core/Grid";
import { Layout } from "../layout";
import SimpleSlider from "../components/Slideshow";
import { makeStyles } from "@material-ui/styles";
import { TextField, Typography } from "@material-ui/core";
const useStyles = makeStyles({
    container: {
        width: "85%",
        margin: "auto",
        marginBottom: "3rem",
    },

    bannerShopNow: {
        "&:hover": {
            background: "#4a5863",
            transitionDuration: "200ms",
        },
        background: "#4D5E6B",
        color: "white",
        fontFamily: "Poppins",
        fontSize: "1.2rem",
        border: "none",
        padding: "0.5em 3em",
        marginTop: "1.5rem",
        "& > a": {
            color: "white",
            textDecoration: "none",
        },
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
    const classes = useStyles();
    return (
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
                        required
                    />
                    <TextField
                        id="name"
                        label="Last Name"
                        required
                        variant="outlined"
                        className={classes.padded}
                        fullWidth
                    />
                </div>
                <div className={classes.rowForm}>
                    <TextField
                        required
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
                        required
                        label="Company"
                        variant="outlined"
                        className={classes.padded}
                    />
                    <TextField
                        id="name"
                        required
                        label="Phone"
                        variant="outlined"
                        className={classes.padded}
                    />
                </div>

                <TextField
                    id="email-address"
                    label="Your Message"
                    variant="outlined"
                    required
                    rows={6}
                    fullWidth
                    maxRows={15}
                    multiline={true}
                />
                <button className={classes.bannerShopNow} type="submit">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

const useCustomerServiceStyles = makeStyles({
    header: {
        fontSize: "2rem",
    },
    subHeader: {
        fontSize: "1.5rem",
    },                                
    text : {
        fontSize : "1.2rem"
    }
});
const CustomerServiceInfo = () => {
    const classes = useCustomerServiceStyles();
    return (
        <div style={{margin:"auto",width:"85%",textAlign : "center"}}>
            <div className={classes.header}> Customer Service </div>
            <p className={classes.text}>
                Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  (514) 731-8868 <br />
                Fax:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(514) 731-8838 <br />
                Toll Free: 1-877-639-5460 <br />
                Email: info@meyking.com
            </p>
            <div className={classes.subHeader}>Head Office</div>
            <p className={classes.text}>
                5475, rue Paré, suite 228<br/> Mont-Royal, Québec, H4P 1P7, Canada
            </p>
            <p className={classes.text}>
                Click <a href="https://goo.gl/maps/BFiMvii8yGjmeE5n7">here</a>{" "}
                to find us on Google Maps
            </p>
        </div>
    );
};

const ContactUsPage = () => {
    //name
    //phone number
    //email <address>
    // company name (optional)
    // message
    const classes = useStyles();
    return (
        <Layout>
            <SimpleSlider hideAboutUs={true} />
            <Grid container spacing={5} style={{ marginTop: "3rem" }}>
                <Grid item xs={12} md={8}>
                    <ContactUs />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomerServiceInfo />
                </Grid>
            </Grid>
        </Layout>
    );
};
export default ContactUsPage;
