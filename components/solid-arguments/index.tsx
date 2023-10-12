import React from 'react';
import styles from './styles.module.scss';
import SmallRectangle from './components/small-rectangle';
import tg from '@/public/solid-arguments/tg.svg';
import email from '@/public/solid-arguments/email.svg';
import whatsapp from '@/public/solid-arguments/whatsapp.svg';
import TrustUs from './components/trust-ts';
import TwentyFour from './components/twenty-four';

const SolidArguments: React.FC = () => {
    return (
        <div className={styles.solid_arguments} id='solid-arguments'>
            <div className={styles.solid_arguments__container}>
                <h2 className='h2'>Твердые аргументы</h2>
                <div>
                    <TwentyFour />
                    <TrustUs />
                </div>
                <div>
                    <SmallRectangle
                        messenger='telegram'
                        link='tverdomery_met'
                        image={tg}
                        hoverColor='rgba(37, 156, 216, 1)'
                    />
                    <SmallRectangle
                        messenger='email'
                        link='mng@tverdomer.ru'
                        image={email}
                        hoverColor='#ff0000'
                    />
                    <SmallRectangle
                        messenger='telegram'
                        link='8 (800) 222-75-26'
                        image={whatsapp}
                        hoverColor='#00ff00'
                    />
                </div>
            </div>
        </div>
    );
};

export default SolidArguments;
