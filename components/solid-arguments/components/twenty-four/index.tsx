import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import image from '@/public/solid-arguments/companys-trusted.png';
import Button from '@/ui/button-underline';
import ButtonStroke from '@/ui/button-stroke';
import svg from '@/public/solid-arguments/star.svg';

const TwentyFour: React.FC = () => {
    return (
        <div className={styles.twenty_four}>
            <div className={styles.twenty_four__container}>
                <div className={styles.test}>
                    <span>24</span>
                    <span className={styles.span}>
                        года <br /> на рынке
                    </span>
                </div>
                <p className='px16'>
                    Центр «МЕТ» - разработчик высокоточных портативных
                    твердомеров и мер твердости. Портативные твердомеры МЕТ
                    позволяют осуществлять достоверный контроль твердости
                    изделий из металла. Меры твердости МЕТ – средства измерения,
                    позволяющие осуществлять поверку и калибровку твердомеров.
                </p>

                <div className='!flex !flex-col'>
                    <div className='!flex !flex-row !justify-between'>
                        <ButtonStroke
                            href='/'
                            padding='12px 42px'>
                            {' '}
                            <svg
                                width='14'
                                height='20'
                                viewBox='0 0 14 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M11.7912 11.3904C12.9523 10.1906 13.6668 8.55603 13.6668 6.75456C13.6668 3.07266 10.6821 0.0878906 7.00016 0.0878906C3.31826 0.0878906 0.333496 3.07266 0.333496 6.75456C0.333496 8.55603 1.04803 10.1906 2.20914 11.3904L1.0183 18.5354L2.99501 19.9122L7.00016 17.6236L11.0053 19.9122L12.982 18.5354L11.7912 11.3904ZM11.0002 6.75456C11.0002 8.9637 9.2093 10.7546 7.00016 10.7546C4.79102 10.7546 3.00016 8.9637 3.00016 6.75456C3.00016 4.54542 4.79102 2.75456 7.00016 2.75456C9.2093 2.75456 11.0002 4.54542 11.0002 6.75456ZM9.35492 12.9934C8.62274 13.2699 7.82912 13.4212 7.00016 13.4212C6.1712 13.4212 5.37758 13.2699 4.64541 12.9934L4.11039 16.2035L7.00016 14.5522L9.88993 16.2035L9.35492 12.9934Z'
                                    fill='white'
                                />
                            </svg>{' '}
                            Сертификаты
                        </ButtonStroke>
                        <ButtonStroke
                            href='/'
                            padding='12px 60px'>
                            <svg
                                width='22'
                                height='20'
                                viewBox='0 0 22 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M11.0002 3.31967L12.6034 7.83119L12.833 8.47726L13.5184 8.49596L18.3045 8.62659L14.5092 11.5455L13.9657 11.9635L14.1597 12.6211L15.5145 17.2134L11.5657 14.5058L11.0002 14.1181L10.4347 14.5058L6.48583 17.2134L7.84059 12.6211L8.0346 11.9635L7.49109 11.5455L3.69581 8.62659L8.48194 8.49596L9.16734 8.47726L9.39693 7.83119L11.0002 3.31967Z'
                                    stroke='white'
                                    stroke-width='2'
                                />
                            </svg>
                            Награды
                        </ButtonStroke>
                    </div>
                    <div>
                        <ButtonStroke
                            href='/'
                            padding='12px 183px'>
                            <svg
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M11.6668 13.6666H0.333496V0.333252H17.6668V17.6666L11.6668 13.6666ZM15.0002 12.9567L12.4055 10.9999H3.00016V2.99992H15.0002V12.9567Z'
                                    fill='white'
                                />
                            </svg>
                            Отзывы
                        </ButtonStroke>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwentyFour;
