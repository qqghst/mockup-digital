import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import IOurProductItemProps from './interface';

const OurProductItem: React.FC<IOurProductItemProps> = ({
    img,
    name,
    availability,
    oldPrice,
    price,
}) => {
    return (
        <div className={styles.ourProduct_item}>
            <div className={styles.ourProduct_item__container}>
                <p className='h5'>{name}</p>
                <Image
                    src={img}
                    alt='product'
                    width={740 / 2}
                    height={676 / 2}
                />
                <div>
                    <div>
                        <div className={styles.price}>
                            <p className='px14'>{availability}</p>
                            {oldPrice ? (
                                <div>
                                    <span className='h4'>{oldPrice}</span>
                                    <span className='h4'>{price}</span>
                                </div>
                            ) : (
                                <span className='h4'>{price}</span>
                            )}
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button>
                            <Image
                                src='/our-product/cart.svg'
                                alt='product'
                                width={32 / 2}
                                height={28 / 2}
                            />
                        </button>
                        <button>
                            <Image
                                src='/our-product/arrow.svg'
                                alt='product'
                                width={32 / 2}
                                height={28 / 2}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProductItem;
