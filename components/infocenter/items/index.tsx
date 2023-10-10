import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
// import img from '@/public/infocenter/first.png';
import { IInfoCenterItemProps } from './interface';

const InfoCenterItems: React.FC<IInfoCenterItemProps> = ({
    img,
    text,
    date,
}) => {
    return (
        <div className={styles.infoCenterItem}>
            <div className={styles.infoCenterItem__container}>
                <Image
                    className={styles.image}
                    src={img}
                    alt='img'
                    width={418}
                    height={289}
                />
                <div>
                    <p className='px14'>Новости</p>
                    <p className='h5'>{text}</p>
                    <div>
                        <span className='px14'>{date}</span>
                        <svg
                            width='12'
                            height='12'
                            viewBox='0 0 12 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M2.02881 2.97103L2.02881 0.637695L11.3621 0.637696V9.97103H9.02881V4.62095L2.28761 11.3622L0.637695 9.71224L7.3789 2.97103L2.02881 2.97103Z'
                                fill='#1B1F22'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCenterItems;
