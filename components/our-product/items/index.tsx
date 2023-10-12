import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import IOurProductItemProps from './interface';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurProductItem: React.FC<IOurProductItemProps> = ({
    img,
    name,
    availability,
    oldPrice,
    price,
}) => {
    const settings = {
        // infinite: true,

        // centerMode: true,
        // centerPadding: '0',
        speed: 900,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
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

    const array2 = [
        { name2: '1', surname: '2' },
        { name2: '3', surname: '4' },
        { name2: '5', surname: '6' },
    ];

    const data = [
        {
            img: '/our-product/product5.png',
        },
        {
            img: '/our-product/product5.png',
        },
        {
            img: '/our-product/product5.png',
        },
    ];

    return (
        <div className={styles.ourProduct_item}>
            <div className={styles.ourProduct_item__container}>
                <p className='h5'>{name}</p>
                <div className='container'>
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div
                                className=''
                                key={index}>
                                    <img src={item.img} alt="" />
                                {/* <Image
                                    src={item.img}
                                    alt='product'
                                    width={740 / 2}
                                    height={676 / 2}
                                /> */}
                            </div>
                        ))}
                    </Slider>
                </div>
                <div>
                    <div>
                        <div className={`${styles.price} -translate-y-[16px]`} >
                            <p className='px14'>{availability}</p>
                            {oldPrice ? (
                                <div className='flex gap-[0.833vw] -translate-x-[0.833vw]'>
                                    <span className='h4' style={{right: '-23px'}}>{oldPrice}</span>
                                    <span className='h4'>{price}</span>
                                </div>
                            ) : (
                                <span className='h4'>{price}</span>
                            )}
                        </div>
                    </div>
                    <div className={`${styles.buttons}`}>
                        <button>
                            <Image
                                src='/our-product/cart.svg'
                                alt='product'
                                width={32 / 2}
                                height={28 / 2}
                            />
                        </button>
                        <button>
                            <Image
                                src='/our-product/arrow.svg'
                                alt='product'
                                width={32 / 2}
                                height={28 / 2}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProductItem;
