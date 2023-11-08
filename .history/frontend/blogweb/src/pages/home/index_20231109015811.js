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
                        <div className={cx('main-content')}>
                            <a>
                                <img src='https://mannup.vn/wp-content/uploads/2016/11/ed80c049c0fc414f6c5fdaac9afc6a34.jpg'></img>
                            </a>
                            <article className={cx('main-text')}>
                                <h1>Điều g tạo nên một vẽ đẹp nam tính</h1>
                            </article>
                        </div>
                    </div>
                    <div className={cx('contain-right')}>Right</div>
                </div>
            </div>
        </div>

    )
}

export default Home;
