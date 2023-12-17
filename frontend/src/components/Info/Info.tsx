import React from 'react';
import s from "./Info.module.scss";

interface IInfo {
	children: any
}

const Info = ({children}: IInfo) => {
	return (
		<section className={s.info}>
			<div className={"container"}>
				{children}
			</div>
		</section>
	);
};

export default Info;