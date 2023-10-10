import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { IButtonProps } from './interface';

const Button: React.FC<IButtonProps> = ({
    type,
    onClick,
    href,
    children,
    color,
}) => {
    const buttonStyle = {
        color: color,
        
    };

    return (
        <Link
            href={href}
            style={buttonStyle}
            className={styles.button}>
            <span>{children}</span>
        </Link>
    );
};

export default Button;
