import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import image from '@/public/about/fifth.png';

const FifthItem: React.FC = () => {
    return (
        <div className={styles.fifth__item}>
            <p className='h5'>
                Удобная передача и обработка данных на компьютере через
                высокоскоростной USB порт и специальное программное обеспечение.
            </p>

            <Image
                className={styles.image}
                src={image}
                alt='image'
                width={670}
                height={682}
            />
        </div>
    );
};

export default FifthItem;
