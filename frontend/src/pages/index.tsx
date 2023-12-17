import Head from 'next/head'
import Hero from "@/components/Hero/Hero";
import Items from "@/components/Items/Items";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Info from "@/components/Info/Info";
import {InferGetServerSidePropsType} from "next";
import apolloClient from "@/api/apolloClient";
import {GetArticlesByTagSlug} from "@/api/graphql";
import InfoBlock from "@/components/Info/components/InfoBlock";
import React from "react";

export const getServerSideProps = (async (context: any) => {
	const baseArticlesData = await apolloClient.query({
		query: GetArticlesByTagSlug,
		variables: {
			tag: 'базовая-статья'
		}
	})
	const baseArticles = baseArticlesData.data.posts.nodes.map((p: any) => ({
		title: p.title,
		description: p.excerpt,
		categories: p.terms.nodes.filter((t: any) => t.hasOwnProperty("name")).map((t: any) => t.name),
		url: `/articles/${p.databaseId}`,
		image: p.featuredImage ? p.featuredImage.node.mediaItemUrl : null,
		date: p.date,
		source: {
			title: p.acf.sourcetitle,
			url: p.acf.sourceurl
		}
	}))
	return {props: {baseArticles}}
})

export default function Home({baseArticles}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>Neural Networks: Исследования и Развитие в Области Нейросетей</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Header/>
			<main>
				<Hero title={"Исследования и Развитие в Области Нейросетей"}
					  text={"Добро пожаловать на информационный портал, посвященный передовым исследованиям и технологиям нейросетей. Углубитесь в принципы работы и классификацию нейронных сетей, ознакомьтесь с последними открытиями и прочитайте актуальные статьи от ведущих экспертов в области. Исследуйте будущее, которое формируется сегодня."}/>
				<Info>
					<InfoBlock>
						<h2>Добро пожаловать в Мир Нейросетей!</h2>

						<p>Наши дни ознаменованы удивительными технологическими достижениями, и в центре этого внимания
							—
							нейросети, ключ к эволюции искусственного интеллекта. Добро пожаловать на наш информационный
							ресурс,
							где
							мы вместе с вами погружаемся в захватывающий мир нейронных сетей.</p>
					</InfoBlock>

					<InfoBlock>
						<h3>Что такое нейросети?</h3>

						<p>Нейросети – это мощные инструменты, созданные вдохновением от структуры человеческого мозга.
							Они
							способны обучаться на основе данных, распознавать образы, прогнозировать тенденции и
							принимать
							решения.
							Нейронные сети стали неотъемлемой частью нашей технологической реальности, влияя на нашу
							повседневную
							жизнь и переопределяя традиционные подходы к задачам.</p>
					</InfoBlock>

					<InfoBlock>
						<h3>Что мы предлагаем?</h3>

						<ul>
							<li><p><strong>Глубокое Исследование</strong>: Разберемся в принципах работы нейронных
								сетей, их классификации и
								различных
								типах, от рекуррентных до сверточных.</p>
							</li>
							<li><p><strong>Актуальные Статьи</strong>: Погружаемся в мир передовых технологий. Мы
								предоставляем вам последние
								исследования,
								статьи и анализы от ведущих экспертов в области нейросетей.</p>
							</li>
							<li><p><strong>Образование и Ресурсы</strong>: Для тех, кто стремится развиваться в этой
								области, мы предлагаем
								образовательные
								ресурсы, учебные пособия и рекомендованную литературу.</p>
							</li>
						</ul>
					</InfoBlock>

					<InfoBlock>
						<h3>Присоединяйтесь к нашему сообществу!</h3>

						<p>Давайте вместе исследовать, обсуждать и разделять знания о нейросетях. Независимо от вашего
							уровня знаний — от новичка до профессионала — здесь есть место для каждого, кто стремится
							понять
							и
							принять вызовы этого захватывающего мира. Добро пожаловать в будущее, формируемое нейронными
							сетями!</p>
					</InfoBlock>
				</Info>
				<Items title={"Статьи для базового понимания нейросетей"} description={"Начните погружение в мир нейросетей"} items={baseArticles}/>
			</main>
			<Footer/>
		</>
	)
}
