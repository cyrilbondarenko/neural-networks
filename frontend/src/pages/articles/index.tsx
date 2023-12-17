import Head from 'next/head'
import Hero from "@/components/Hero/Hero";
import Items from "@/components/Items/Items";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import InfoBlock from "@/components/Info/Info";
import {InferGetServerSidePropsType} from "next";
import apolloClient from "@/api/apolloClient";
import {GetArticleByCat, GetArticlesByTagSlug} from "@/api/graphql";

export const getServerSideProps = (async (context: any) => {
	const articlesData = await apolloClient.query({
		query: GetArticleByCat,
		variables: {
			categoryName: 'статьи'
		}
	})
	const articles = articlesData.data.posts.nodes.map((p: any) => ({
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
	return {props: {articles}}
})

export default function Home({articles}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>Статьи</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Header/>
			<main>
				<Hero title={"Статьи"}
					  text={"Откройте для себя статьи, посвященные ключевым аспектам нейросетевых технологий. Погружайтесь в увлекательные исследования, открывайте новые горизонты и оставайтесь в курсе последних тенденций."}/>
				<Items items={articles}/>
			</main>
			<Footer/>
		</>
	)
}
