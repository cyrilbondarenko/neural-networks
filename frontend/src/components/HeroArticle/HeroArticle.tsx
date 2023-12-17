import React from 'react';
import s from "./HeroArticle.module.scss";
import Image from "next/image";
import dayjs from "dayjs";
import {ISpec} from "@/models";

interface IHeroArticle {
	title: string
	image: string
	date: string
	source: {
		title: string,
		url: string
	}
	categories: string[]
	specs?: ISpec[]
}

const HeroArticle = ({title, source, image, categories, date, specs}: IHeroArticle) => {
	return (
		<section className={s.hero}>
			<div className={s.hero__background}>
				<Image src={"/hero-background.jpg"} priority={true} alt={'Фон'} width={1920} height={1080}/>
			</div>
			<div className={"container"}>
				<div className={s.hero__info}>
					<h1>{title}</h1>
					<div className={s.hero__row}>
						<span>Источник: </span>
						<a href={source.url}><strong>{source.title}</strong></a>
					</div>
					<div className={s.hero__row}>
						<span>Дата публикации: </span>
						<strong>{dayjs(date).format("DD.MM.YYYY")}</strong>
					</div>
					{specs && specs.map((i) => <div className={s.hero__row} key={i.field}>
						<span>{i.field}: </span>
						<strong>{i.value}</strong>
					</div>)}
					<div className={s.hero__cats}>
						{categories.map(c => <span key={c}>{c}</span>)}
					</div>
				</div>
				<div className={s.hero__image}>
					<Image src={image} alt={title} width={1000} height={1000}/>
				</div>
			</div>
		</section>
	);
};

export default HeroArticle;