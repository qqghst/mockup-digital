import React from 'react';
import Image from 'next/image';
import firstItem from '@/public/about/first-item.png';
import styles from './styles.module.scss';
import FirstItem from './components/first-item';
import SecondItem from './components/second-item';
import ThirdItem from './components/third-item';
import FourthItem from './components/fourth-item';
import FifthItem from './components/fifth-item';
import SixthItem from './components/sixth-item';

const About: React.FC = () => {
    return (
        <div className={styles.about} id='about'>
            <div className={styles.about__container}>
                <FirstItem />
                <SecondItem />
                <ThirdItem />

                <FourthItem />

                <FifthItem />

                <SixthItem />
            </div>
        </div>
    );
};

export default About;
