import React from 'react';
import s from "./Content.module.scss";

interface IContent {
	content: string
}

const Content = ({content}: IContent) => {
	return (
		<section className={s.content}>
			<div className={"container"} dangerouslySetInnerHTML={{__html: content}}>

			</div>
		</section>
	);
};

export default Content;