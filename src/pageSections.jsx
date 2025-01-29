import Home from "./assets/icons/home.svg?react";
import User from "./assets/icons/user.svg?react";
import Code from "./assets/icons/code.svg?react";
import Education from "./assets/icons/education.svg?react";
import AppLined from "./assets/icons/app-lined.svg?react";
import Email from "./assets/icons/email.svg?react";

export const pageSections = [
    { id: "home", title: "Home", iconEle: <Home /> },
    { id: "about", title: "About Me", iconEle: <User /> },
    { id: "tech-stack", title: "Technical Stack", iconEle: <Code /> },
    { id: "education", title: "Education", iconEle: <Education /> },
    { id: "projects", title: "My Projects", iconEle: <AppLined /> },
    { id: "contact", title: "Contact", iconEle: <Email /> },
];
