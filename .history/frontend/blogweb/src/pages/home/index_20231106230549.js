import { useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
const cx = classNames.bind(styles);



function Home() {
    return (
        <div className='wrapper'>
            <h1>Home</h1>
        </div>

    )
}

export default Home;
