'use client';

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import img from '@/public/about/second-item.png';

const SecondItem: React.FC = () => {
    return (
        <div className={styles.second_item}>
            <h2 className='h2'>Ультразвуковой и динамический датчики</h2>

            <div>
                <div>
                    <h4 className='h4'>Включен в Госреестр СИ</h4>
                    <div>
                        <p>&mdash; Действие поверки 1 год</p>
                        <p>&mdash; Поставляется поверенным</p>
                    </div>
                </div>
                <Image
                    className={styles.image}
                    src={img}
                    alt='image'
                    width={window.innerWidth <= 768 ? 662 / 2 : 1344 / 2}
                    height={window.innerWidth <= 768 ? 632 / 2 : 1284 / 2}
                />
                <div>
                    <h4 className='h4'>
                        Быстрая калибровка по мерам 1 разряда{' '}
                    </h4>
                    <button>Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default SecondItem;
