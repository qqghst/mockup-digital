import React, {useRef} from 'react';
import Image from 'next/image';

const Card = ({ card, index, currentIndex }) => {
    const currentCardRef = useRef(null);
    const nextCardRef = useRef(null);
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
                    alt={card.image}
                    width={1400 / 2}
                    height={1400 / 2}
                />
            </div>
        </div>
    );
};

export default Card;
