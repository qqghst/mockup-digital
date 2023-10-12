import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Button from '@/ui/button-underline';

const SixthItem: React.FC = () => {
    return (
        <div className={styles.sixth__item}>
            <div className={styles.button}>
                <Button color='#CBCECF' href=''>подробнее</Button>
            </div>
            <div>
                <span>3</span>
                <span>
                    года <br /> гарантии
                </span>
            </div>
        </div>
    );
};

export default SixthItem;
