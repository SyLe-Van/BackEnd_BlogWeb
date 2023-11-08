import Header from './Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <div className={cx('container')}>
                <div className={cx('contain')}>
                    <div className={cx('contain-left')}><h1>Left</h1></div>
                    <div className={cx('contain-middle')}>
                        {children}
                    </div>
                    <div className={cx('contain-right')}><h1>Right</h1></div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
