import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
            <a href="http://localhost:2002">BLOG's SY</a>
            </div>
        </header>
    );
}

export default Header;
