'use client';

import React from 'react';
import styles from './styles.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurProductItem from './items';
import data from './data';

import NextArrow from '@/ui/arrows/nextArrow';
import PrevArrow from '@/ui/arrows/prevArrow';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurProduct: React.FC = () => {
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
        <div
            className={styles.ourProduct}
            id='ourproduct'>
            <div className={styles.ourProduct__container}>
                <div className='container'>
                    <Tabs>
                        <TabList
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '0 auto',
                                paddingBottom: '56px',
                            }}>
                            <Tab>Твердомеры</Tab>
                            <Tab>Меры твердости</Tab>
                        </TabList>

                        <TabPanel>
                            <Slider {...settings}>
                                {data.map((item, index) => (
                                    <div
                                        className='relative'
                                        key={index}>
                                        <OurProductItem
                                            name={item.name}
                                            img={item.img}
                                            availability={item.availability}
                                            oldPrice={item.oldPrice}
                                            price={item.price}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </TabPanel>

                        <TabPanel>
                            <Slider {...settings}>
                                {data.map((item, index) => (
                                    <div
                                        className='relative'
                                        key={index}>
                                        <OurProductItem
                                            name={item.name}
                                            img={item.img}
                                            availability={item.availability}
                                            oldPrice={item.oldPrice}
                                            price={item.price}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;
