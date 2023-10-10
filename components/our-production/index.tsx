'use client';

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import photo from '@/public/our-production/photo.png';
import suka from '@/public/infocenter/pagination.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from '@/ui/arrows/nextArrow';
import PrevArrow from '@/ui/arrows/prevArrow';
import data from './data';

const OurProduction: React.FC = () => {
    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: (
            <NextArrow
                onClick={function (
                    event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ): void {
                    throw new Error('Function not implemented.');
                }}
            />
        ),
        prevArrow: (
            <PrevArrow
                onClick={function (
                    event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ): void {
                    throw new Error('Function not implemented.');
                }}
            />
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div
            className={styles.our_production}
            id='our-production'>
            <div className={styles.our_production__container}>
                <div className='container'>
                    <Slider {...settings}>
                        {[...Array(2)].map((_, index) => (
                            <div
                                key={index}
                                className='!mx-auto !flex !justify-center !items-center !relative !flex-col'>
                                <h2 className='h2'>Наше производство</h2>
                                <div className={styles.grid_container}>
                                    {data.map((item, index) => (
                                        <Image
                                            key={index}
                                            className={item.className}
                                            src={item.src}
                                            alt={item.alt}
                                            width={item.width}
                                            height={item.height}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default OurProduction;
