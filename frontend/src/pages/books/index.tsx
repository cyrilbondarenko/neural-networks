import Head from 'next/head'
import Hero from "@/components/Hero/Hero";
import Items from "@/components/Items/Items";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import InfoBlock from "@/components/Info/Info";
import {InferGetServerSidePropsType} from "next";
import apolloClient from "@/api/apolloClient";
import {GetArticleByCat, GetArticlesByTagSlug, GetBooks} from "@/api/graphql";

export const getServerSideProps = (async (context: any) => {
	const booksData = await apolloClient.query({
		query: GetBooks
	})
	const books = booksData.data.posts.nodes.map((p: any) => ({
		title: p.title,
		description: p.excerpt,
		categories: p.terms.nodes.filter((t: any) => t.hasOwnProperty("name")).map((t: any) => t.name),
		url: `/books/${p.databaseId}`,
		image: p.featuredImage ? p.featuredImage.node.mediaItemUrl : null,
		date: p.date,
		source: {
			title: p.acf.sourcetitle,
			url: p.acf.sourceurl
		},
		author: p.acfBooks.author,
		specs: p.acfBooks.specs
	}))
	return {props: {books}}
})

export default function Home({books}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>Библиотека</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Header/>
			<main>
				<Hero title={"Библиотека"}
					  text={"Изучайте ключевые темы, находите вдохновение в книгах, посвященных миру искусственного интеллекта. Путеводитель в лучшие произведения, помогающие понять и оценить влияние нейросетевых технологий на современный мир."}/>
				<Items items={books} isBooks={true}/>
			</main>
			<Footer/>
		</>
	)
}
