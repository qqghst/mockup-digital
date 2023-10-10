import React, { useRef } from 'react';
import IInfoProps from './interface';

const Info: React.FC<IInfoProps> = ({ card, index, currentIndex }) => {
    const currentInfoRef = useRef<HTMLDivElement | null>(null);
    const nextInfoRef = useRef<HTMLDivElement | null>(null);
    return (
        <div
            className={`info ${
                index === currentIndex ? 'current--info' : 'next--info'
            }`}
            ref={(el) =>
                index === currentIndex
                    ? (currentInfoRef.current = el)
                    : (nextInfoRef.current = el)
            }>
            <h1 className='text name'>{card.name}</h1>
            <h4 className='text location'>{card.description}</h4>
        </div>
    );
};

export default Info;
