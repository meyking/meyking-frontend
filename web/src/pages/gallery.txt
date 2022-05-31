import {Layout} from "../layout"
import React from "react";
import SimpleSlider from "../components/Slideshow"
import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
    container : {
        width : "80%",
        margin : "auto",
        marginTop : "2rem"
    }, 
    header : {
        fontSize : "2rem"
    }
})
const About = () => {
    const classes = useStyles()
    return (
        <Layout>
            <SimpleSlider hideAboutUs={true}/>
            <div className={classes.container}>
                <div className={classes.header}>Explore Our Gallery</div>
                <p>
                    At Meyking Enterprise, we are dedicated to provide you with the number one solution to custom packaging. We have an ample supply of bags, boxes, and have worked for many companies such as Sephora, Pandora, and Michael Kors.
                </p>
            </div>
        </Layout>
    );
};
export default About;
