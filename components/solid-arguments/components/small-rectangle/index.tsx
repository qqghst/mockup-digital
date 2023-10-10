'use client'

import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import tg from '@/public/solid-arguments/tg.svg';
import { ISmallRectangleProps } from './interface';

const SmallRectangle: React.FC<ISmallRectangleProps> = ({
    messenger,
    link,
    image,
    hoverColor
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        backgroundColor: isHovered ? hoverColor : '',
        transition: 'background-color 0.3s ease', 
    };

    return (
        <div
            className={styles.small_rectangle}
            style={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div>
                <span className='px14'>{messenger}</span>
                <span className='px22'>{link}</span>
            </div>

            <Image
                src={image}
                alt='tg'
                width={96 / 2}
                height={96 / 2}
            />
        </div>
    );
};

export default SmallRectangle;
