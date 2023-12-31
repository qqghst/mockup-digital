'use client'

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

const FirstItem: React.FC = () => {
    return (
        <div className={styles.first_item}>
            <div className={styles.left_side}>
                <h2 className='h2'>
                    Достоверное измерение твердости по всем шкалам
                </h2>
                <div className={styles.container}>
                    <div className={styles.basic}>
                        <h6>основные</h6>
                        <div>
                            <span>Роквелла</span>
                            <span>HRC</span>
                        </div>
                        <div>
                            <span>Бринелля</span>
                            <span>HB</span>
                        </div>
                        <div>
                            <span>Виккерса</span>
                            <span>HV</span>
                        </div>
                        <div>
                            <span>Шора</span>
                            <span>HSD</span>
                        </div>
                    </div>
                    <div className={styles.extra}>
                        <h6>дополнительные</h6>
                        <div>
                            <span>Роквелла</span>
                            <span>HRB</span>
                        </div>
                        <div>
                            <span>Супер-Роквелла</span>
                            <span>HRN / HRT</span>
                        </div>
                        <div>
                            <span>Лейба</span>
                            <span>HL</span>
                        </div>
                        <div>
                            <span>и другие...</span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right_side}>
                <Image
                    className={styles.image}
                    src='/about/first-item.png'
                    alt='image'
                    width={1200 / 2}
                    height={200 / 2}
                />
            </div>
        </div>
    );
};

export default FirstItem;
