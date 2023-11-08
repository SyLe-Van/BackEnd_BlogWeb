import { useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
const cx = classNames.bind(styles);



function Home() {
    return (
        <div className='wrapper'>
            <div className={cx('container')}>
                <div className={cx('contain')}></div>
            </div>
        </div>

    )
}

export default Home;
