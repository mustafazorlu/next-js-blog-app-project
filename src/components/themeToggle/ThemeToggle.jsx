"use client";

import React from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
const ThemeToggle = () => {
    const { toggle, theme } = useContext(ThemeContext);

    console.log(theme);

    return (
        <div
            className={styles.container}
            onClick={toggle}
            style={
                theme === "dark"
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#0f172a" }
            }
        >
            <Image src="/moon.png" alt="" width={14} height={14} />
            <div
                className={styles.ball}
                style={
                    theme === "dark"
                        ? { right: 2, background: "#0f172a" }
                        : { left: 2, background: "white" }
                }
            ></div>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    );
};

export default ThemeToggle;
