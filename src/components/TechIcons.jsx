import { techIcons } from "../utils/techIcons";
import { Fragment } from "react";

function TechIcons() {
    return (
        <>
            {techIcons.map((icon, i) => (
                <Fragment key={i}>{icon}</Fragment>
            ))}
        </>
    );
}

export default TechIcons;
