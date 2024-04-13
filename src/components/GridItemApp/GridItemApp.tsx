import React from 'react';
import Image from 'next/image';
import styles from './GridItemApp.module.css';

type GridItemAppProps = {
    publicImagePath: string;
    title: string;
    description: string;
    target: string;
}

function GridItemApp ({ publicImagePath, title, description, target }: GridItemAppProps) {
    return (
        <a className={styles.app} href={target}>
            <div className={styles.icon}>
                <Image 
                    alt="iTerm" 
                    loading="lazy" 
                    width="80" 
                    height="80" 
                    decoding="async" 
                    data-nimg="1" 
                    src={publicImagePath} 
                    style={{color: 'transparent'}} 
                />
            </div>
                <div className={styles.content}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.text}>{description}</span>
                </div>
        </a>
    );
}

export default GridItemApp;