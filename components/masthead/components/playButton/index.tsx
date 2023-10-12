'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const PlayButton = () => {
    const originalText = 'ПОСМОТРЕТЬ ВИДEO'; //E и O на англ, поэтому в слове посмтреть они не подсвечиваются

    const transformedText = originalText.split('').map((char, i) => (
        <span
            className={styles.lol}
            key={i}
            style={{
                transform: `rotate(${i * 14}deg)`,
                color:
                    char === 'В' ||
                    char === 'И' ||
                    char === 'Д' ||
                    char === 'E' ||
                    char === 'O'
                        ? 'red'
                        : 'inherit',
            }}>
            {char}
        </span>
    ));

    return (
        <div className={styles.circle}>
            <Link
                href='https://www.quick-tools.net/24px-to-vw-390vp'
                className={styles.logo}></Link>

            <div className={styles.text}>
                <p>{transformedText}</p>
            </div>
        </div>
    );
};

export default PlayButton;
