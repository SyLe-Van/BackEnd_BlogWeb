import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
            <div className={cx('logo')}>
                <a href="http://localhost:2002" style="display: flex; align-items: center; justify-content: center; width: 125px; height: 30px;">
                    MANNUP
                </a>
</div>
            </div>
        </div>
    );
}

export default Header;
