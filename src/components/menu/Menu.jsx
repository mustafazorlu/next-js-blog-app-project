import React from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
import MenuPost from "../menuPosts/MenuPost";
import MenuCategories from "../menuCategories/MenuCategories";
const Menu = () => {
    return (
        <div className={styles.container}>
            {/* first */}
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPost withImage={false} />

            {/* second */}
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1 className={styles.title}>Editor's Pick</h1>
            <MenuCategories/>
            {/* third */}
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1 className={styles.title}>Editor's Pick</h1>
            
            <MenuPost withImage={true} />
        </div>
    );
};

export default Menu;
