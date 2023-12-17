import React from 'react';
import s from "./Items.module.scss";
import {IItem} from "@/models";
import ItemCard from "@/components/ItemCard/ItemCard";

interface IItems {
    title?: string
    description?: string
    items: IItem[]
    isBooks?: boolean
}

const Items = ({title, description, items, isBooks}: IItems) => {
    return (
        <section className={s.items}>
            <div className={"container"}>
                {(title || description) && <div className={s.items__info}>
                    {title && <h2>{title}</h2>}
                    {description && <p>{description}</p>}
                </div>}
                <div className={s.items__list}>
                    {items.map(i => <ItemCard key={i.url} {...i} isBook={isBooks}/>)}
                </div>
            </div>
        </section>
    );
};

export default Items;