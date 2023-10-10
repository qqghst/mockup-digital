import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import image from '@/public/solid-arguments/companys-trusted.png';
import Button from '@/ui/button-underline';

const TrustUs: React.FC = () => {
    return (
        <div className={styles.trust_us}>
            <div className={styles.trust_us__container}>
                <h3 className='h3'>Нам доверяют</h3>
                <Image
                    src={image}
                    alt='image'
                />
                <div>
                    <Button color='#FFFFFF' href='/'>Все клиенты</Button>
                </div>
            </div>
        </div>
    );
};

export default TrustUs;
