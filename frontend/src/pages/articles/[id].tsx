import Head from 'next/head'
import Hero from "@/components/Hero/Hero";
import Items from "@/components/Items/Items";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import InfoBlock from "@/components/Info/Info";
import {InferGetServerSidePropsType} from "next";
import apolloClient from "@/api/apolloClient";
import {GetArticleById, GetArticlesByTagSlug} from "@/api/graphql";
import Content from "@/components/Content/Content";
import HeroArticle from "@/components/HeroArticle/HeroArticle";

export const getServerSideProps = (async (context: any) => {
	const id = context.query.id;
	const articleData = await apolloClient.query({
		query: GetArticleById,
		variables: {
			id
		}
	})
	const post = articleData.data.post
	const article = {
		title: post.title,
		content: post.content,
		categories: post.terms.nodes.filter((t: any) => t.hasOwnProperty("name")).map((t: any) => t.name),
		url: `/articles/${post.databaseId}`,
		image: post.featuredImage ? post.featuredImage.node.mediaItemUrl : null,
		date: post.date,
		source: {
			title: post.acf.sourcetitle,
			url: post.acf.sourceurl
		}
	}
	return {props: {article}}
})

export default function Home({article}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>{article.title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Header/>
			<main>
				<HeroArticle title={article.title} date={article.date} source={article.source} categories={article.categories} image={article.image}/>
				<Content content={article.content}/>
			</main>
			<Footer/>
		</>
	)
}
