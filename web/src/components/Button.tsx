import {styled} from "@material-ui/core/styles"
const styles = {
    '&:hover' : {
        background : "#4a5863",
        transitionDuration : "200ms"
    },
    background: "#4D5E6B",
    color: "white",
    padding: 10,
    fontFamily : "Poppins",
    fontSize : "1.2rem",
    border: "none",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    "& > a" : {
        color : "white",
        textDecoration : "none",
    }
    ,
}
export default styled("button")(styles)
