import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Home from "./pageSections/Home";
import Header from "./pageSections/Header";
import AboutMe from "./pageSections/AboutMe";
import TechStack from "./pageSections/TechStack";
import Education from "./pageSections/Education";
import Projects from "./pageSections/Projects";
import Contact from "./pageSections/Contact";
import Footer from "./pageSections/Footer";
import NavBar from "./components/NavBar";
import SideBullets from "./components/SideBullets";
import LineSeparator from "./components/LineSeparator";

function App() {
    const [isDarkMood, setIsDarkMood] = useState(
        () => window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMood) root.classList.add("dark-mood");
        else root.classList.remove("dark-mood");
    }, [isDarkMood]);

    function handleDarkMood() {
        setIsDarkMood((isDark) => !isDark);
    }

    return (
        <>
            <Header isDarkMood={isDarkMood} />
            <Home isDarkMood={isDarkMood} />
            <LineSeparator />
            <AboutMe isDarkMood={isDarkMood} />
            <LineSeparator />
            <TechStack />
            <LineSeparator />
            <Education isDarkMood={isDarkMood} />
            <LineSeparator />
            <Projects />
            <LineSeparator />
            <Contact isDarkMood={isDarkMood} />
            <Footer />
            <NavBar onChangeMood={handleDarkMood} isDarkMood={isDarkMood} />
            <SideBullets />
            <Toaster
                position="top-center"
                toastOptions={{
                    success: { duration: 3000 },
                    error: { duration: 5000 },
                    style: {
                        fontSize: "1rem",
                        maxWidth: "30rem",
                        padding: "1rem 1.5rem",
                        backgroundColor: "var(--main-color)",
                        color: "var(--main-font-color)",
                    },
                }}
            />
        </>
    );
}

export default App;
