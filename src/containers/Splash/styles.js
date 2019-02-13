import engineBackground from "../../resources/engineBackground.jpg";
import scoreboardBackground from "../../resources/scoreboardBackground.jpg";

export const styles = {

    splitContainer: {
        flex: 1,
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        height: "100%"
    },
    splitHalfLeft: {
        display: "flex",
        flex: "50%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: "url(" + engineBackground + ")",
        backgroundSize: "100% 100%"
    },
    splitHalfRight: {
        display: "flex",
        flex: "50%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: "url(" + scoreboardBackground + ")",
        backgroundSize: "100% 100%"
    },
    linkWrapper: {
        height: "100%",
        width: "100%",
        textDecoration: "none",
        fontSize: "6em"
    }

};