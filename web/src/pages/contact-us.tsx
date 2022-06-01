import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert"
import { Layout } from "../layout";
import SimpleSlider from "../components/Slideshow";
import { makeStyles } from "@material-ui/styles";
import { TextField, Typography } from "@material-ui/core";
const useStyles = makeStyles({
    container: {
        width: "95%",
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
        // width: "60vw",
        minWidth: "300px",
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
function getSubjectValue(location) {
    try {
        const prodName = location.state.product;
        if (prodName === undefined) {
            return "";
        } else {
            return "Quote for " + prodName;
        }
    } catch (e) {
        return "";
    }
}
const ContactUs = ({location}) => {
    const classes = useStyles();
    const [status, setStatus] = useState(0);
    const [invalid,setInvalid] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setInvalid(!e.currentTarget.checkValidity())
        setTimeout(() => {
            setInvalid(false)
        },3000)
        if (!e.currentTarget.checkValidity()){
            return
        }
        const data = new FormData(e.currentTarget);
        const jsonObject = Object.fromEntries(data.entries());
        const resp = await fetch("/.netlify/functions/send-mail", {
            method: "POST",
            body: JSON.stringify(jsonObject),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setStatus(resp.ok ? 1 : -1);
        setTimeout(() => {
            setStatus(0)
        },4000)
    };
    return (
        <div className={classes.container}>
            <div className={classes.header}> Contact Us </div>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <div className={classes.rowForm}>
                    <TextField
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        className={classes.padded}
                        fullWidth
                        required
                    />
                    <TextField
                        name="lastName"
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
                        name="email"
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        className={classes.padded}
                        fullWidth
                    />
                </div>
                <div className={classes.rowForm}>
                    <TextField
                        name="company"
                        required
                        label="Company"
                        variant="outlined"
                        className={classes.padded}
                    />
                    <TextField
                        name="phone"
                        required
                        label="Phone"
                        variant="outlined"
                        className={classes.padded}
                    />
                </div>

                <div className={classes.rowForm}>
                    <TextField
                        required
                        name="subject"
                        label="Subject"
                        variant="outlined"
                        className={classes.padded}
                        defaultValue={getSubjectValue(location)}
                        fullWidth
                    />
                </div>
                <TextField
                    name="message"
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
            <br/>
            {invalid && (
                <Alert severity="warning">
                    Please make sure to fill out all required fields. Make sure to provide a valid email as well.
                </Alert>
            )}
            {status == 1 && (
                <Alert severity="success">
                    Your response has been submitted. We will be in contact
                    shortly.
                </Alert>
            )}
            {status == -1 && (
                <Alert severity="error">
                    We were unable to deliver your message, try sending a direct
                    mail to{" "}
                    <a href="mailto:michael@meyking.com">info@meyking.com</a>
                </Alert>
            )}
        </div>
    );
};

const useCustomerServiceStyles = makeStyles({
    header: {
        fontSize: "2em",
    },
    subHeader: {
        fontSize: "1.5em",
    },
    text: {
        fontSize: "1.2em",
    },
});
const CustomerServiceInfo = () => {
    const classes = useCustomerServiceStyles();
    return (
        <div
            style={{
                width: "95%",
                margin: "auto",
                lineHeight: "1.5",
                fontSize: "0.9rem",
            }}
        >
            <div className={classes.header}> Customer Service </div>
            <p className={classes.text}>
                Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (514) 731-8868 <br />
                Fax:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(514)
                731-8838 <br />
                Toll Free: 1-877-639-5460 <br />
                Email: info@meyking.com
            </p>
            <div className={classes.subHeader}>Head Office</div>
            <p className={classes.text}>
                5475, rue Paré, suite 228
                <br /> Mont-Royal, Québec, H4P 1P7, Canada
            </p>
            <p className={classes.text}>
                Click <a href="https://goo.gl/maps/BFiMvii8yGjmeE5n7">here</a>{" "}
                to find us on Google Maps
            </p>
        </div>
    );
};

const ContactUsPage = ({location}) => {
    //name
    //phone number
    //email <address>
    // company name (optional)
    // message
    const classes = useStyles();
    return (
        <Layout>
            <SimpleSlider hideAboutUs={true} />
            <br />
            <br />
            <Grid container style={{ maxWidth: "1600px", margin: "auto" }}>
                <Grid item sm={12} md={4}>
                    <CustomerServiceInfo />
                </Grid>
                <Grid item sm={12} md={8}>
                    <ContactUs location={location}/>
                </Grid>
            </Grid>
        </Layout>
    );
};
export default ContactUsPage;
