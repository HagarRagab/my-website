import { useState } from "react";
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

function App() {
    const [isDarkMood, setIsDarkMood] = useState(false);

    function handleDarkMood() {
        const root = document.documentElement;
        root.classList.toggle("dark-mood");
        setIsDarkMood((isDark) => !isDark);
    }

    return (
        <>
            <Header isDarkMood={isDarkMood} />
            <Home isDarkMood={isDarkMood} />
            <AboutMe isDarkMood={isDarkMood} />
            <TechStack />
            <Education isDarkMood={isDarkMood} />
            <Projects />
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
