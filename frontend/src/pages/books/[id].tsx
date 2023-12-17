import Head from 'next/head'
import Hero from "@/components/Hero/Hero";
import Items from "@/components/Items/Items";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import InfoBlock from "@/components/Info/Info";
import {InferGetServerSidePropsType} from "next";
import apolloClient from "@/api/apolloClient";
import {GetArticleById, GetArticlesByTagSlug, GetBookById} from "@/api/graphql";
import Content from "@/components/Content/Content";
import HeroArticle from "@/components/HeroArticle/HeroArticle";

export const getServerSideProps = (async (context: any) => {
	const id = context.query.id;
	const bookData = await apolloClient.query({
		query: GetBookById,
		variables: {
			id
		}
	})
	const post = bookData.data.post
	const book = {
		title: post.title,
		content: post.content,
		categories: post.terms.nodes.filter((t: any) => t.hasOwnProperty("name")).map((t: any) => t.name),
		url: `/articles/${post.databaseId}`,
		image: post.featuredImage ? post.featuredImage.node.mediaItemUrl : null,
		date: post.date,
		source: {
			title: post.acf.sourcetitle,
			url: post.acf.sourceurl
		},
		author: post.acfBooks.author,
		specs: post.acfBooks.specs
	}
	return {props: {book}}
})

export default function Home({book}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>{book.title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Header/>
			<main>
				<HeroArticle title={book.title} date={book.date} source={book.source} categories={book.categories} image={book.image} specs={book.specs}/>
				<Content content={book.content}/>
			</main>
			<Footer/>
		</>
	)
}
