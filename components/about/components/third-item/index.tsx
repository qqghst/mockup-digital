'use client';

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import img from '@/public/about/third-item.png';
import Button from '@/ui/button-underline';

const ThirdItem: React.FC = () => {
    return (
        <div className={styles.third_item}>
            <Image
                className={styles.image}
                src={img}
                alt='image'
                width={1340 / 2}
                height={1200 / 2}
            />
            <div>
                <h2 className='h2'>Измерение твёрдости по основным шкалам</h2>
                <p className='px16'>
                    Достигается за счет калибровки только с помощью эталонных
                    мер твердости без использования переводных таблиц, которые
                    «зашиты» в программы других твердомеров, увеличивающих
                    погрешность измерения.
                </p>
                <Button
                    color='#FFFFFF'
                    href='/'>
                    выбрать товары
                </Button>
            </div>
        </div>
    );
};

export default ThirdItem;
