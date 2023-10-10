import React, { useRef } from 'react';
import Image from 'next/image';
import ICardProps from './interface';

const Card: React.FC<ICardProps> = ({ card, index, currentIndex }) => {
    const currentCardRef = useRef<HTMLDivElement | null>(null);
    const nextCardRef = useRef<HTMLDivElement | null>(null);
    return (
        <div
            className={`card ${
                index === currentIndex ? 'current--card' : 'next--card'
            }`}
            ref={(el) =>
                index === currentIndex
                    ? (currentCardRef.current = el)
                    : (nextCardRef.current = el)
            }>
            <div className='card__image'>
                <Image
                    src={card.image}
                    alt='sd'
                    width={1400 / 2}
                    height={1400 / 2}
                />
            </div>
        </div>
    );
};

export default Card;
