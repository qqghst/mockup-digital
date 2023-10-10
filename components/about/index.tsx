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
        <div
            className={styles.about}
            id='about'>
            <div className={styles.about__container}>
                <FirstItem />
                <SecondItem />
                <ThirdItem />
                <div className='flex flex-col gap-[6.154vw] md:flex-row md:gap-[1.563vw]'>
                    <FourthItem />
                    <div className='flex flex-col gap-[6.154vw] md:flex-col md:gap-[1.563vw]'>
                        <FifthItem />
                        <SixthItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
