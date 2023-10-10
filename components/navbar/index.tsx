'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const navToggleRef = useRef<HTMLButtonElement | null>(null);

    const toggleNav = () => {
        setNavVisible((prevVisible) => !prevVisible);
    };
    useEffect(() => {
        const navToggle = navToggleRef.current;

        if (navToggle) {
            navToggle.addEventListener('click', toggleNav);

            return () => {
                navToggle.removeEventListener('click', toggleNav);
            };
        }
    }, []);
    return (
        <header className={styles.header}>
            <div>
                <Image
                    src='/navbar/logo.svg'
                    alt='logo'
                    width={146 / 2}
                    height={58 / 2}
                />
            </div>

            <button
                ref={navToggleRef}
                className={styles.hamburgerMenu}
                aria-controls='navigation'
                aria-expanded={isNavVisible}>
                <span className=''></span>
            </button>

            <nav>
                <ul
                    className={`${styles.nav} nav`}
                    id='navigation'
                    data-visible={isNavVisible}>
                    <li className={styles.dropdown}>
                        <Link
                            href='/'
                            className={styles.link}>
                            компания
                        </Link>
                        <div className={styles.dropdown_menu}>
                            <ul>
                                <li>Твердомеры</li>
                                <li>Меры твердости</li>
                                <li>Подобрать твердометр</li>
                                <li>Подобрать меры твердости</li>
                            </ul>
                        </div>
                    </li>

                    <li className={styles.dropdown}>
                        <Link
                            href='/'
                            className={styles.link}>
                            продукция
                        </Link>
                        <div className={styles.dropdown_menu}>
                            <ul>
                                <li>Твердомеры</li>
                                <li>Меры твердости</li>
                                <li>Подобрать твердометр</li>
                                <li>Подобрать меры твердости</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <Link href='/'>дилеры</Link>
                    </li>
                    <li>
                        <Link href='/'>инфоцентр</Link>
                    </li>
                    <li>
                        <Link href='/'>проверка подлинности</Link>
                    </li>
                    <li>
                        <Link href='/'>контакты</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <p
                    className={`${styles.nav} px15`}
                    id='navigation'
                    data-visible={isNavVisible}>
                    8 (800) 222-75-26
                </p>
                <div
                    className={styles.nav}
                    id='navigation'
                    data-visible={isNavVisible}>
                    <Image
                        src='/navbar/language.svg'
                        alt='search'
                        width={38 / 2}
                        height={36 / 2}
                    />
                    <p className='nav'>ENG</p>
                </div>
            </div>

            <div>
                <Image
                    src='/navbar/phone.svg'
                    alt='search'
                    width={38 / 2}
                    height={36 / 2}
                />
            </div>

            <div>
                <div
                    className={styles.nav}
                    id='navigation'
                    data-visible={isNavVisible}>
                    <Image
                        src='/navbar/search.svg'
                        alt='search'
                        width={38 / 2}
                        height={36 / 2}
                    />
                </div>

                <div>
                    <Image
                        src='/navbar/cart.svg'
                        alt='cart'
                        width={38 / 2}
                        height={36 / 2}
                    />
                </div>
                <div
                    className={styles.nav}
                    id='navigation'
                    data-visible={isNavVisible}>
                    <Image
                        src='/navbar/user.svg'
                        alt='user'
                        width={38 / 2}
                        height={36 / 2}
                    />
                </div>
            </div>

            {/* <div
                className={`${styles.search_mobile} ${styles.nav}`}
                id='navigation'
                data-visible={isNavVisible}>
                <input
                    type='text'
                    placeholder='Поиск'
                />
                <button type='submit'>
                    {' '}
                    <Image
                        src='/navbar/search.svg'
                        alt='search'
                        width={38 / 2}
                        height={36 / 2}
                    />
                </button>
            </div> */}
        </header>
    );
};

export default Navbar;
