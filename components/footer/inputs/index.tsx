import React from 'react';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';

const Input: React.FC = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        reset();
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}>
            <div className={styles.inputContainer}>
                <input
                    className={`${styles.effect} ${styles.phoneInput}`}
                    type='text'
                    {...register('phoneNumber', {
                        required: 'Введите номер телефона',
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Введите корректный номер телефона',
                        },
                    })}
                    placeholder='Заказать звонок'
                />
                <span className={styles.focusBorder}></span>
                {errors.phoneNumber && (
                    <p className='absolute text-red-700'>
                        {errors.phoneNumber.message}
                    </p>
                )}
            </div>
            <div className={styles.inputContainer}>
                <input
                    className={`${styles.effect} ${styles.emailInput}`}
                    type='text'
                    {...register('email', {
                        required: 'Введите email',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message:
                                'Введите корректный адрес электроной почты',
                        },
                    })}
                    placeholder='info@tverdomer.ru'
                />
                <span className={styles.focusBorder}></span>
                {errors.email && (
                    <p className='absolute text-red-700'>
                        {errors.email.message}
                    </p>
                )}
            </div>
        </form>
    );
};

export default Input;
