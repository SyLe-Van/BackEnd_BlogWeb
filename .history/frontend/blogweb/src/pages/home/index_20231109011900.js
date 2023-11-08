import { useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
const cx = classNames.bind(styles);



function Home() {
    return (
        <div className='wrapper'>
            <div className={cx('inner')}>
                <div className={cx('contain')}>
                    <div className={cx('contain-left')}>
                        Left
                    </div>
                    <div className={cx('contain-middle')}>
                        <article className='main-content'>
                            
                        </article>
                    </div>
                    <div className={cx('contain-right')}>Right</div>
                </div>
            </div>
        </div>

    )
}

export default Home;
