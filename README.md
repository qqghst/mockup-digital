'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';
import Image from 'next/image';
import a from '@/public/masthead/mery-tverdosti.png';
import b from '@/public/masthead/tverdomery.png';

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardData = [
        {
            image: a,
            name: 'МЕРЫ ТВЕРДОСТИ',
            description: 'Как выбрать',
        },
        {
            image: b,
            name: 'Твердомеры',
            description: 'Проверка подлинности',
        },
    ];

    useEffect(() => {
        const buttons = {
            prev: document.querySelector('.btn--left'),
            next: document.querySelector('.btn--right'),
        };

        buttons.next?.addEventListener('click', () => swapCards('right'));
        buttons.prev?.addEventListener('click', () => swapCards('left'));

        let cardsContainerEl = document.querySelector('.cards__wrapper');
        let cardInfosContainerEl = document.querySelector('.info__wrapper');

        let nextCardEl = cardsContainerEl?.querySelector('.next--card');
        let currentCardEl = cardsContainerEl?.querySelector('.current--card');

        function swapCards(direction: any) {
            swapCardsClass(direction);
            changeInfo(direction);
            
            currentCardEl?.classList.remove('next--card');


            currentCardEl = nextCardEl;
            nextCardEl = cardsContainerEl?.querySelector('.next--card');

            function swapCardsClass() {
                if (direction === 'right') {
                    currentCardEl?.classList.remove('current--card');
                    nextCardEl?.classList.remove('next--card');

                    currentCardEl?.classList.add('previous--card');
                    nextCardEl?.classList.add('current--card');

                    buttons.next.style.display = 'none';
                    buttons.prev.style.display = 'block';
                } else if (direction === 'left') {
                    currentCardEl?.classList.add('current--card');
                    nextCardEl?.classList.add('next--card');
                    currentCardEl?.classList.remove('previous--card');
                    nextCardEl?.classList.remove('current--card');

                    buttons.next.style.display = 'block';
                    buttons.prev.style.display = 'none';
                }
            }
        }

        function changeInfo(direction: any) {
            let nextInfoEl = cardInfosContainerEl?.querySelector('.next--info');
            let currentInfoEl =
                cardInfosContainerEl?.querySelector('.current--info');

            gsap.timeline()
                .to([buttons.prev, buttons.next], {
                    duration: 0.2,
                    opacity: 0.5,
                    pointerEvents: 'none',
                })
                .to(
                    currentInfoEl.querySelectorAll('.text'),
                    {
                        duration: 0.4,
                        stagger: 0.1,
                        translateY: '-120px',
                        opacity: 0,
                    },
                    '-='
                )
                .call(() => {
                    swapInfosClass(direction);
                })
                .fromTo(
                    nextInfoEl.querySelectorAll('.text'),
                    {
                        opacity: 0.5,
                        translateY: '40px',
                    },
                    {
                        duration: 0.4,
                        stagger: 0.1,
                        translateY: '0px',
                        opacity: 1,
                    }
                )
                .to([buttons.prev, buttons.next], {
                    duration: 0.2,
                    opacity: 1,
                    pointerEvents: 'all',
                });

            function swapInfosClass() {
                currentInfoEl?.classList.remove('current--info');
                nextInfoEl?.classList.remove('next--info');

                if (direction === 'right') {
                    currentInfoEl?.classList.add('next--info');
                    nextInfoEl?.classList.add('current--info');
                } else if (direction === 'left') {
                    currentInfoEl?.classList.add('next--info');
                    nextInfoEl?.classList.add('current--info');
                }
            }
        }

        function init() {
            let tl = gsap.timeline();

            tl.to(cardsContainerEl.children, {
                delay: 0.15,
                duration: 0.5,
                stagger: {
                    ease: 'power4.inOut',
                    from: 'right',
                    amount: 0.1,
                },
                '--card-translateY-offset': '0%',
            })
                .to(
                    cardInfosContainerEl
                        .querySelector('.current--info')
                        .querySelectorAll('.text'),
                    {
                        delay: 0.5,
                        duration: 0.4,
                        stagger: 0.1,
                        opacity: 1,
                        translateY: 0,
                    }
                )
                .to(
                    [buttons.prev, buttons.next],
                    {
                        duration: 0.4,
                        opacity: 1,
                        pointerEvents: 'all',
                    },
                    '-=0.4'
                );
        }

        const waitForImages = () => {
            const images = [...document.querySelectorAll('img')];
            const totalImages = images.length;
            let loadedImages = 0;
            const loaderEl = document.querySelector('.loader span');

            gsap.set(cardsContainerEl.children, {
                '--card-translateY-offset': '100vh',
            });
            gsap.set(
                cardInfosContainerEl
                    .querySelector('.current--info')
                    .querySelectorAll('.text'),
                {
                    translateY: '40px',
                    opacity: 0,
                }
            );
            gsap.set([buttons.prev, buttons.next], {
                pointerEvents: 'none',
                opacity: '0',
            });

            images.forEach((image) => {
                imagesLoaded(image, (instance: any) => {
                    if (instance.isComplete) {
                        loadedImages++;
                        let loadProgress = loadedImages / totalImages;

                        gsap.to(loaderEl, {
                            duration: 1,
                            scaleX: loadProgress,
                            backgroundColor: `hsl(${
                                loadProgress * 120
                            }, 100%, 50%`,
                        });

                        if (totalImages == loadedImages) {
                            gsap.timeline()
                                .to('.loading__wrapper', {
                                    duration: 0.8,
                                    opacity: 0,
                                    pointerEvents: 'none',
                                })
                                .call(() => init());
                        }
                    }
                });
            });
        };

        waitForImages();
    }, []);
    return (
        <div className='containerrr'>
            <div className='app'>
                <div className='cardList'>
                    <button className='cardList__btn btn btn--left'>
                        <div className='icon'>
                            <svg
                                id='arrow-left'
                                width='72'
                                height='72'
                                viewBox='0 0 72 72'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <circle
                                    cx='36'
                                    cy='36'
                                    r='35.5'
                                    fill='#7F8589'
                                    fill-opacity='0.4'
                                    stroke='#7F8589'
                                />
                                <circle
                                    cx='36'
                                    cy='36'
                                    r='4'
                                    fill='#FF3E41'
                                />
                            </svg>
                        </div>
                    </button>

                    <div className='cards__wrapper'>
                        {cardData.map((card, index) => (
                            <div
                                className={`card ${
                                    index === 0 ? 'current--card' : 'next--card'
                                }`}
                                key={index}>
                                <div className='card__image'>
                                    <Image
                                        src={card.image}
                                        alt='sd'
                                        width={1400 / 2}
                                        height={1400 / 2}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className='cardList__btn btn btn--right'>
                        <div className='icon'>
                            <svg
                                id='arrow-right'
                                width='72'
                                height='72'
                                viewBox='0 0 72 72'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <circle
                                    cx='36'
                                    cy='36'
                                    r='35.5'
                                    fill='#7F8589'
                                    fill-opacity='0.4'
                                    stroke='#7F8589'
                                />
                                <circle
                                    cx='36'
                                    cy='36'
                                    r='4'
                                    fill='#FF3E41'
                                />
                            </svg>
                        </div>
                    </button>
                </div>

                <div className='infoList'>
                    <div className='info__wrapper'>
                        {cardData.map((card, index) => (
                            <div
                                className={`info ${
                                    index === 0 ? 'current--info' : 'next--info'
                                }`}
                                key={index}>
                                <h1 className='text name'>{card.name}</h1>
                                <h4 className='text location'>
                                    {card.description}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
