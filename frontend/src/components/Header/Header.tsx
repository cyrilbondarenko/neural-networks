import React, {useEffect, useState} from 'react';
import s from "./Header.module.scss";
import Link from "next/link";
import classNames from "classnames";

interface IHeader {
}

const Header = ({}: IHeader) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isActive])

    return (
        <header className={classNames(s.header, isActive && s.header_active)}>
            <div className={"container"}>
                <Link href="/" className={s.header__logo}>
                    <span><strong>NEURAL</strong>NETWORKS</span>
                </Link>
                <ul className={s.header__menu}>
                    <li><Link href={"/"}>Главная</Link></li>
                    <li><Link href={"/articles"}>Статьи</Link></li>
                    <li><Link href={"/books"}>Библиотека</Link></li>
                    <li><Link href={"/contacts"}>Контакты</Link></li>
                </ul>
                <button className={classNames(s.header__burger, isActive && s.header__burger_active)} onClick={() => {
                    setIsActive(!isActive)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;