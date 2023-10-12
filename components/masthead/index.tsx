'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Slider from './components/slider';
import PlayButton from './components/playButton';
import Button from '@/ui/button-underline';

const Masthead: React.FC = () => {
    return (
        <div
            className={styles.masthead}
            id='masthead'>
            <div className={styles.masthead__container}>
                <div className={styles.top}>
                    <h3 className='h3'>
                        Точность без
                        <br />
                        компромиссов{' '}
                    </h3>
                    <PlayButton />
                </div>

                <div className={styles.slider}>
                    <Slider />
                </div>

                <div className={styles.bottom}>
                    <Button
                        href='/'
                        color='#FFFFFF'>
                        купить
                    </Button>
                    <div>
                        <Image
                            src='/masthead/gosreestr.svg'
                            alt='ГОСРЕЕСТР'
                            width={130 / 2}
                            height={128 / 2}
                        />
                        <div>
                            <p>госреестр</p>
                            <p>средств изменений</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Masthead;
