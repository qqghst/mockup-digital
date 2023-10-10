import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import SocialMediaItem from './items';

const SocialMedia: React.FC = () => {
    return (
        <div className={styles.socialMedia}>
            <div className={styles.socialMedia__container}>
                <SocialMediaItem
                    name='Telegram'
                    icon='/side-bar/social-media/telegram.svg'
                    background='#259CD8'
                />
                <SocialMediaItem
                    name='Whats App'
                    icon='/side-bar/social-media/whatsapp.svg'
                    background='#67CC5C'
                />
                <SocialMediaItem
                    name='Email'
                    icon='/side-bar/social-media/email.svg'
                    background='#D76353'
                />
                <SocialMediaItem
                    name='Message'
                    icon='/side-bar/social-media/message.svg'
                    background='#3871E0'
                />
            </div>
        </div>
    );
};

export default SocialMedia;
