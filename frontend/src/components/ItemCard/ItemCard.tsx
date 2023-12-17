import React from 'react';
import s from "./ItemCard.module.scss";
import dayjs, {Dayjs} from "dayjs";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import {IItem} from "@/models";
import classNames from "classnames";

const ItemCard = ({title, description, url, source, image, categories, date, author, specs, isBook}: IItem) => {
    return (
        <div className={classNames(s.card, isBook && s.card_book)}>
            <div className={s.card__image}>
                <Image src={image} alt={title} width={300} height={200}/>
            </div>
            <div className={s.card__header}>
                <div className={s.card__source}>
                    <span>Источник: <a href={source.url}>{source.title}</a></span>
                </div>
                <div className={s.card__date}>
                    <time>{dayjs(date).format("DD.MM.YYYY")}</time>
                </div>
            </div>
            <Link href={url} className={s.card__title}>
                <h2>{title}</h2>
                {author && <span>{author}</span>}
            </Link>
            {categories && <div className={s.card__categories}>
                {categories.map(c => <span key={c}>{c}</span>)}
            </div>}
            <div className={s.card__description} dangerouslySetInnerHTML={{__html: description}}></div>
            <Link href={url} className={s.card__button}><Button text={"Подробнее"}/></Link>
        </div>
    );
};

export default ItemCard;