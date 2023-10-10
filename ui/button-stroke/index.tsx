import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { IButtonProps } from './interface';

const ButtonStroke: React.FC<IButtonProps> = ({
    type,
    onClick,
    href,
    children,

    padding,
}) => {
    const buttonStyle = {
        padding: padding,
    };

    return (
        <Link
            href={href}
            className={styles.RequestBtn}
            style={buttonStyle}>
            <span>{children}</span>
        </Link>
    );
};

export default ButtonStroke;
