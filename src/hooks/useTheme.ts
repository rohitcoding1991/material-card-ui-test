"use client";

import { useTheme as useNextTheme } from "next-themes";

const useTheme = () => {
    const { theme, setTheme } = useNextTheme();
    return {
        theme,
        setTheme,
        isDark: theme === "dark"
    };
};

export default useTheme;
