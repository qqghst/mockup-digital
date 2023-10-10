'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Pagination: React.FC = () => {
    const sections = [
        'masthead',
        'about',
        'ourproduct',
        'solid-arguments',
        'our-production',
        'infocenter',
    ];
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 0 && rect.bottom >= 0) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={styles.pagination}>
            <div className={styles.pagination__container}>
                <div className={styles.numbers}>
                    <ul>
                        {sections.map((sectionId, index) => (
                            <li key={index}>
                                <span
                                    className={
                                        activeSection === sectionId
                                            ? `${styles.active}`
                                            : ''
                                    }>
                                    {/* {index + 1} */}
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.scrollDown}>
                    <label
                        htmlFor='switch'
                        className='side-nav'>
                        вниз
                    </label>
                    <input
                        onClick={() => scrollToSection(sections[1])}
                        id='switch'
                        className='switch'
                        type='checkbox'
                    />
                </div>
            </div>
        </div>
    );
};

export default Pagination;
