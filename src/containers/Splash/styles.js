import landing_background from "../../resources/landing_background.jpg";

export const styles = {
    body: {
        height: "100vh",
        backgroundImage: "url(" + landing_background + ")",
        backgroundSize: "100% 100%",
        display: "flex",
        flexDirection: "column"
    },
    headerBar: {
        backgroundColor: "transparent"
    },
    logo: {
        height: "2.5em",
        width: "2.5em"
    },
    titleContainer: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
};