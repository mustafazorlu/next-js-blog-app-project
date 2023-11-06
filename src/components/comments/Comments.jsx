import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        className={styles.input}
                        placeholder="Write a comment.."
                        name=""
                    ></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src="/p1.jpeg"
                            className={styles.image}
                            alt=""
                            width={50}
                            height={50}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Jhon Doe</span>
                            <span className={styles.date}>01.01.2323</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis iste velit dolore facere placeat est fuga
                        voluptatem reiciendis nemo atque natus totam, animi
                        inventore explicabo exercitationem recusandae impedit
                        aspernatur voluptate.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
