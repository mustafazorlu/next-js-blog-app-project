import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                src="/p1.jpeg"
                                fill
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam nobis quo facere ut voluptas inventore
                            placeat voluptatem, laboriosam enim animi quasi
                            labore, numquam sit molestias esse necessitatibus ab
                            eius in?
                        </p>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam nobis quo facere ut voluptas inventore
                            placeat voluptatem, laboriosam enim animi quasi
                            labore, numquam sit molestias esse necessitatibus ab
                            eius in?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam nobis quo facere ut voluptas inventore
                            placeat voluptatem, laboriosam enim animi quasi
                            labore, numquam sit molestias esse necessitatibus ab
                            eius in?
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
