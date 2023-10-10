'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { ISocialMediaItemProps } from './interface';

const SocialMediaItem: React.FC<ISocialMediaItemProps> = ({
    name,
    icon,
    background,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const iconStyle = {
        background: isHovered ? background : 'transparent',
    };

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.button}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div
                    className={styles.icon}
                    style={iconStyle}>
                    <Image
                        className={styles.svg}
                        src={icon}
                        alt='icon'
                        width={40 / 2}
                        height={40 / 2}
                    />
                </div>
                <span>{name}</span>
            </div>
        </div>
    );
};

export default SocialMediaItem;
