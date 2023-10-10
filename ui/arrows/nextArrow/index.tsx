import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import INextArrowProps from './interface';

const NextArrow: React.FC<INextArrowProps> = ({ onClick }) => {
    return (
        <div
            className={styles.arrowContainer}
            onClick={onClick}>
            <Image
                className={styles.arrow}
                style={{ transform: 'rotate(180deg)' }}
                src='/infocenter/arrow-left.svg'
                alt='arrow-right'
                width={56 / 2}
                height={112 / 2}
            />
        </div>
    );
};

export default NextArrow;
