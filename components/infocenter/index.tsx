'use client';

import React from 'react';
import styles from './styles.module.scss';
import InfoCenterItems from './items';
import firstImg from '@/public/infocenter/first.png';
import secondImg from '@/public/infocenter/second.png';
import thirdImg from '@/public/infocenter/third.png';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '@/ui/button-underline';
import data from './data';
import NextArrow from '@/ui/arrows/nextArrow';
import PrevArrow from '@/ui/arrows/prevArrow';

const InfoCenter: React.FC = () => {
    const settings = {
        infinite: true,

        centerMode: true,
        centerPadding: '0',
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
        <div className={styles.infocenter} id='infocenter'>
            <div className={styles.infocenter__container}>
                <h2 className='h2'>Инфоцентр</h2>
                <div className='container'>
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div
                                className='relative'
                                key={index}>
                                <InfoCenterItems
                                    img={item.img}
                                    text={item.text}
                                    date={item.date}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div>
                    <Button
                        color='#000'
                        href='/'>
                        все публикации
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InfoCenter;
