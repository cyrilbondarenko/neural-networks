import React from 'react';
import s from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

interface IFooter {
}

const Footer = ({}: IFooter) => {
    return (
        <footer className={s.footer}>
            <div className={"container"}>
                <div className={s.footer__row}>
                    <a href="#" className={s.footer__logo}>
                        <span><strong>NEURAL</strong>NETWORKS</span>
                    </a>
                    <div className={s.menu}>
                        <div className={s.menu__item}>
                            <span>Навигация</span>
                            <ul>
                                <li><Link href={"/"}>Главная</Link></li>
                                <li><Link href={"/articles"}>Статьи</Link></li>
                                <li><Link href={"/books"}>Библиотека</Link></li>
                                <li><Link href={"/contacts"}>Контакты</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.footer__row}>
                   <span>© 2023 Бондаренко Кирилл</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;