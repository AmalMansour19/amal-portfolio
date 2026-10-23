
import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import { ar } from "../locales/ar";
import { en } from "../locales/en";

const LanguageContext = createContext(null);

const translations = { ar, en };

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        try {
            return localStorage.getItem("portfolio-language") === "ar"
                ? "ar"
                : "en";
        } catch {
            return "en";
        }
    });

    const isArabic = language === "ar";
    const t = translations[language];

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = isArabic ? "rtl" : "ltr";

        try {
            localStorage.setItem("portfolio-language", language);
        } catch {
            // The language switch still works if storage is unavailable.
        }
    }, [language, isArabic]);

    const toggleLanguage = () => {
        setLanguage((current) => (current === "en" ? "ar" : "en"));
    };

    return (
        <LanguageContext.Provider
            value={{ language, isArabic, t, setLanguage, toggleLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used inside LanguageProvider"
        );
    }

    return context;
}
