'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';
import Card from './items/card';
import Info from './items/info';
import data from './data';

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const cardsContainerRef = useRef<HTMLDivElement | null>(null);
    const cardInfosContainerRef = useRef<HTMLDivElement | null>(null);

    const buttonsRef = useRef<{
        prev: HTMLButtonElement | null;
        next: HTMLButtonElement | null;
    }>({
        prev: null,
        next: null,
    });

    const nextCardRef = useRef<HTMLDivElement | null>(null);
    const currentCardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        alert(123)
        const buttons = buttonsRef.current;
        const cardsContainerEl = cardsContainerRef.current;
        const cardInfosContainerEl = cardInfosContainerRef.current;

        // if (!buttons || !cardsContainerEl || !cardInfosContainerEl) {
        //     return;
        // }
        const nextCardEl = nextCardRef.current;
        const currentCardEl = currentCardRef.current;

        buttons.next?.addEventListener('click', () => swapCards('right'));
        buttons.prev?.addEventListener('click', () => swapCards('left'));

        const swapCards = (direction: 'left' | 'right') => {
            swapCardsClass(direction);
            changeInfo(direction);
        };

        const swapCardsClass = (direction: 'left' | 'right') => {
            if (direction === 'right') {
                console.log('button-right pressed');
                // currentCardEl?.classList.remove('current--card');
                // nextCardEl?.classList.remove('next--card');

                // currentCardEl?.classList.add('previous--card');
                // nextCardEl?.classList.add('current--card');
                if (currentCardEl && nextCardEl) {
                    currentCardEl.classList.remove('current--card');
                    nextCardEl.classList.remove('next--card');
                    console.log(currentCardEl)
                    currentCardEl.style.display = 'none';
                    nextCardEl.classList.add('current--card');
                    console.log(currentCardEl)
                }

                if (buttons.next) {
                    buttons.next.style.display = 'none';
                }
                if (buttons.prev) {
                    buttons.prev.style.display = 'block';
                }
            } else if (direction === 'left') {
                console.log('button-left pressed');
                currentCardEl?.classList.remove('previous--card');
                nextCardEl?.classList.remove('current--card');

                currentCardEl?.classList.add('current--card');
                nextCardEl?.classList.add('next--card');

                if (buttons.next) {
                    buttons.next.style.display = 'block';
                }
                if (buttons.prev) {
                    buttons.prev.style.display = 'none';
                }
            }
        };
        if (cardsContainerEl) {
            currentCardRef.current =
                cardsContainerEl.querySelector('.current--card');

            nextCardRef.current = cardsContainerEl.querySelector('.next--card');
        }

        const changeInfo = (direction: 'left' | 'right') => {
            let nextInfoEl = cardInfosContainerEl?.querySelector('.next--info');
            let currentInfoEl =
                cardInfosContainerEl?.querySelector('.current--info');

            if (currentInfoEl && nextInfoEl) {
                gsap.timeline()
                    .to([buttons.prev, buttons.next], {
                        duration: 0.2,
                        opacity: 0.5,
                        pointerEvents: 'none',
                        // translateX: '0px',
                    })
                    .to(
                        currentInfoEl.querySelectorAll('.text'),
                        {
                            duration: 0.4,
                            stagger: 0.1,
                            translateY: '-120px',
                            opacity: 0,
                            // translateX: '0px',
                        },
                        '-='
                    )
                    .call(() => {
                        swapInfosClass();
                    })
                    .fromTo(
                        nextInfoEl.querySelectorAll('.text'),
                        {
                            opacity: 0.5,
                            translateY: '40px',
                            // translateX: '0px',
                        },
                        {
                            duration: 0.4,
                            stagger: 0.1,
                            translateY: '0px',
                            // translateX: '900px',
                            opacity: 1,
                        }
                    )
                    .to([buttons.prev, buttons.next], {
                        duration: 0.2,
                        opacity: 1,
                        pointerEvents: 'all',
                    });
            }

            const swapInfosClass = () => {
                currentInfoEl?.classList.remove('current--info');
                nextInfoEl?.classList.remove('next--info');

                if (direction === 'right') {
                    console.log('info-right')
                    currentInfoEl?.classList.add('next--info');
                    nextInfoEl?.classList.add('current--info');
                } else if (direction === 'left') {
                    console.log('info-left')
                    currentInfoEl?.classList.add('next--info');
                    nextInfoEl?.classList.add('current--info');
                }
            };
        };

        const init = () => {
            let tl = gsap.timeline();

            if (cardsContainerEl) {
                tl.to(cardsContainerEl.children, {
                    delay: 0.15,
                    duration: 0.5,
                    stagger: {
                        ease: 'power4.inOut',
                        from: 'end',
                        amount: 0.1,
                    },
                    '--card-translateY-offset': '0%',
                });
            }

            const currentInfoEl =
                cardInfosContainerEl?.querySelector('.current--info');
            if (currentInfoEl) {
                tl.to(currentInfoEl.querySelectorAll('.text'), {
                    delay: 0.5,
                    duration: 0.4,
                    stagger: 0.1,
                    opacity: 1,
                    translateY: 0,
                });
            }

            if (buttons.prev && buttons.next) {
                tl.to(
                    [buttons.prev, buttons.next],
                    {
                        duration: 0.4,
                        opacity: 1,
                        pointerEvents: 'all',
                    },
                    '-=0.4'
                );
            }
        };

        const waitForImages = () => {
            const images = Array.from(document.querySelectorAll('img'));

            const totalImages = images.length;
            let loadedImages = 0;
            const loaderEl = document.querySelector('.loader span');

            if (cardsContainerEl) {
                gsap.set(cardsContainerEl.children, {
                    '--card-translateY-offset': '100vh',
                });
            }

            const currentInfoEl =
                cardInfosContainerEl?.querySelector('.current--info');
            if (currentInfoEl) {
                gsap.set(currentInfoEl.querySelectorAll('.text'), {
                    translateY: '40px',
                    opacity: 0,
                });
            }

            if (buttons.prev && buttons.next) {
                gsap.set([buttons.prev, buttons.next], {
                    pointerEvents: 'none',
                    opacity: '0',
                });
            }

            images.forEach((image) => {
                imagesLoaded(image, (instance: any) => {
                    if (instance.isComplete) {
                        loadedImages++;
                        let loadProgress = loadedImages / totalImages;

                        if (loaderEl) {
                            gsap.to(loaderEl, {
                                duration: 1,
                                scaleX: loadProgress,
                                backgroundColor: `hsl(${
                                    loadProgress * 120
                                }, 100%, 50%`,
                            });
                        }

                        if (totalImages == loadedImages) {
                            gsap.timeline().call(() => init());
                        }
                    }
                });
            });
        };

        waitForImages();
    }, []);
    return (
        <div className='slider_container'>
            <div className='app'>
                <div className='cardList'>
                    <button
                        ref={(el) => (buttonsRef.current.prev = el)}
                        className='cardList__btn btn btn--left'>
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

                    <div
                        className='cards__wrapper'
                        ref={cardsContainerRef}>
                        {data.map((item, index) => (
                            <Card
                                key={index}
                                card={item}
                                index={index}
                                currentIndex={currentIndex}
                            />
                        ))}
                    </div>

                    <button
                        ref={(el) => (buttonsRef.current.next = el)}
                        className='cardList__btn btn btn--right'>
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
                    <div
                        className='info__wrapper'
                        ref={cardInfosContainerRef}>
                        {data.map((item, index) => (
                            <Info
                                key={index}
                                card={item}
                                index={index}
                                currentIndex={currentIndex}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
