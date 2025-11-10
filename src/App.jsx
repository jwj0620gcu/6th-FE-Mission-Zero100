import { useEffect, useState } from "react";
import Header from "@/components/Header";
import LoginPage from "@/pages/LoginPage";

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userEmail = getCookie("userEmail");
        if (userEmail) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div className="max-w-xl mx-auto p-6">
            <Header />
            {isLoggedIn ? <TodoContainer /> : <LoginPage />}
        </div>
    );
}
