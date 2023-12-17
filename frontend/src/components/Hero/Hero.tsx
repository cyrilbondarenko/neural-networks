import React from 'react';
import s from "./Hero.module.scss";
import Image from "next/image";

interface IHero {
    title: string
    text?: string
}

const Hero = ({title, text}: IHero) => {
    return (
        <section className={s.hero}>
            <div className={s.hero__background}>
                <Image src={"/hero-background.jpg"} priority={true} alt={'Фон'} width={1920} height={1080}/>
            </div>
            <div className={"container"}>
                <h1>{title}</h1>
                {text && <p>{text}</p>}
            </div>
        </section>
    );
};

export default Hero;