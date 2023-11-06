import Header from './Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
import Content from './Content';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <div className={cx('contain')}>{children}

            </div>

        </div>
    );
}

export default DefaultLayout;
