import Head from 'next/head'
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Info from "@/components/Info/Info";
import s from "@/components/Info/Info.module.scss";
import React from "react";
import InfoBlock from "@/components/Info/components/InfoBlock";

export default function Contacts() {
	return (
		<>
			<Head>
				<title>Контакты</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Header/>
			<main>
				<Hero title={"Контакты"}/>
				<Info>
					<InfoBlock>
						<h2>Дорогие посетители,</h2>

						<p>Мы ценим ваш интерес к нашему ресурсу о нейросетях и готовы предоставить вам необходимую
							поддержку и информацию. Если у вас есть вопросы, предложения или вы хотите связаться с
							разработчиком, воспользуйтесь следующей контактной информацией:</p>
					</InfoBlock>
					<InfoBlock>
						<h3>Электронная почта</h3>

						<ul>
							<li>Общие вопросы</li>
							<li>Техническая поддержка</li>
							<li>Партнерские запросы</li>
						</ul>

						<p>Адрес электронной почты: <a href="mailto:cyrilbondarenko@gmail.com"><strong>cyrilbondarenko@gmail.com</strong></a></p>
					</InfoBlock>
					<InfoBlock>
						<p>Данный сайт разработан в качестве курсовой работы по дисциплине "Web-технологии"</p>
						<p>С уважением, <br/> Бондаренко Кирилл Вячеславович</p>
					</InfoBlock>
				</Info>
			</main>
			<Footer/>
		</>
	)
}
