import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import img from '@/public/about/fourth.png';

const FourthItem: React.FC = () => {
    return (
        <div className={styles.fourth_item}>
            <h2 className='h2'>Высокая степень защиты корпуса</h2>
            <div>
                <span>Влагозащищенность: IP65</span>
                <span>Температура: от -20°C до + 60°C</span>
                <span>Ударопрочность: IK06</span>
            </div>

            <Image
                className={styles.image}
                src={img}
                alt='img'
                width={1018 / 2}
                height={938 / 2}
            />
        </div>
    );
};

export default FourthItem;
