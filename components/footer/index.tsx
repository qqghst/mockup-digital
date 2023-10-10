'use client';

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Input from './inputs';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <Image
                    className={styles.logo}
                    src='/navbar/logo.svg'
                    alt='logo'
                    width={146 / 2}
                    height={58 / 2}
                />

                <div>
                    <div>
                        <p className='px15'>Продукция</p>
                        <ul className='px15-regular'>
                            <li>
                                <Link href='/'>Портативные твердомеры</Link>
                            </li>
                            <li>
                                <Link href='/'>Миниатюрные твердомеры</Link>
                            </li>
                            <li>
                                <Link href='/'>Эталонные меры твердости</Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Эталонные меры микротвердости
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>Подбор твердомера </Link>
                            </li>
                            <li>
                                <Link href='/'>Выбор мер твердости</Link>
                            </li>
                            <li>
                                <Link href='/'>Техническая поддержка</Link>
                            </li>
                            <li>
                                <Link href='/'>Часто задаваемые вопросы</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='px15'>Компания</p>
                        <ul className='px15-regular'>
                            <li>
                                <Link href='/'>О компании</Link>
                            </li>
                            <li>
                                <Link href='/'>Музей твердометрии</Link>
                            </li>
                            <li>
                                <Link href='/'>Сертификация</Link>
                            </li>
                            <li>
                                <Link href='/'>Отзывы</Link>
                            </li>
                            <div>
                                <ul className='px15'>
                                    <li>
                                        <Link href='/'>Дилеры </Link>
                                    </li>
                                    <li>
                                        <Link href='/'>Инфоцентр</Link>
                                    </li>
                                    <li>
                                        <Link href='/'>
                                            Проверка подлинности
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className='h3'>8 (800) 222-75-26</h3>
                    <Input />
                    <p className='px15'>Офис и производство</p>
                    <p className='px15-regular'>
                        124498, г. Москва, Зеленоград, 4922-й проезд, д. 4с4,
                        Технопарк «ЭЛМА».
                    </p>
                </div>
            </div>
            <div className={styles.post_footer}>
                <p className='px15-regular'>COPYRIGHT © 1991-2023 ООО «ЦЕНТР МЕТ» Все права защищены</p>
                <p className='px15-regular'>Политика конфиденциальности</p>
            </div>
        </footer>
    );
};

export default Footer;
