
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
const cx = classNames.bind(styles);



function Home() {
    // const [index, setIndex] = useState(0);
    // function nextStep() {
    //     if (index === images.length - 1) {
    //         setIndex(0);
    //         return;
    //     }
    //     setIndex(index + 1);
    // }

    // function prevStep() {
    //     if (index === 0) {
    //         setIndex(images.length - 1);
    //         return;
    //     }
    //     setIndex(index - 1);
    // }

    // return (
    //     <div className={cx('wrapper')}>
    //         <div className={cx('slideshow')}>
    //             <img src={images[index]} alt="slides" className={cx('slides')} />
    //             <button className={cx('prev')} onClick={prevStep}>
    //                 →
    //             </button>
    //             <button className={cx('next')} onClick={nextStep}>
    //                 ←
    //             </button>
    //         </div>
    //     </div>
    // );
}

export default Home;
