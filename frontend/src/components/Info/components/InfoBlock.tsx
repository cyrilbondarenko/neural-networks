import React from 'react';
import s from './../Info.module.scss';

interface IInfoBlock {
	children: any
}
const InfoBlock = ({children}: IInfoBlock) => {
	return (
		<div className={s.info__block}>
			{children}
		</div>
	);
};

export default InfoBlock;