import React from 'react'
import Spring from '../../components/Spring'
import { Summer } from '../../components/Summer'
import Autumn from '../../components/Autumn'
import { Winter } from '../../components/Winter'
import { Navigation } from '../../components/Navigation'
import { Title } from '../../components/Title'
import Reference from '../../components/Reference'

export type SeasonTranslations = {
    english: string;
    spanish: string;
    arabic: string;
    mongolian: string;
    korean: string;
    hungarian: string;
    japanese: string;
    french: string;
    german: string;
};

const SEASONS_IN_ALL_LANGUAGES = {
    spring: {
        english: "Spring",
        spanish: "Primavera",
        arabic: "ربيع",
        mongolian: "Хавар",
        korean: "봄",
        hungarian: "Tavaszi",
        japanese: "春",
        french: "Printemps",
        german: "Frühling"
    },
    summer: {
        english: "Summer",
        spanish: "Verano",
        arabic: "صيف",
        mongolian: "Өвөл",
        korean: "여름",
        hungarian: "Nyár",
        japanese: "夏",
        french: "Été",
        german: "Sommer"
    },
    autumn: {
        english: "Autumn",
        spanish: "Otoño",
        arabic: "خريف",
        mongolian: "Очир",
        korean: "가을",
        hungarian: "Ősz",
        japanese: "秋",
        french: "Automne",
        german: "Herbst"
    },
    winter: {
        english: "Winter",
        spanish: "Invierno",
        arabic: "شتاء",
        mongolian: "Өвлийн",
        korean: "겨울",
        hungarian: "Tél",
        japanese: "冬",
        french: "Hiver",
        german: "Winter"
    }
}



const Home = () => {
    const [bgColor, setBgColor] = React.useState("bg-spring")



    React.useEffect(() => {
        const handleScroll = () => {
            const movez = document.querySelectorAll<HTMLElement>(".season")
            for (let i = 0; i < movez.length; i++) {

                var start = window.scrollY - movez[i].offsetTop + window.innerHeight;
                var stop = window.scrollY - movez[i].offsetTop - movez[i].clientHeight;
                var rate = movez[i].getAttribute('id');
                if (rate === "spring") {
                    if (start > (start - stop) / 4 && stop < 0) {
                        setBgColor("bg-spring")

                    }
                }
                if (rate === "summer") {

                    if (start > (start - stop) / 4 && stop < 0) {
                        setBgColor("bg-summer")

                    }

                }
                if (rate === "autumn") {
                    if (start > (start - stop) / 4 && stop < 0) {
                        setBgColor("bg-autumn")

                    }
                }
                if (rate === "winter") {
                    if (start > (start - stop) / 4 && stop < 0) {
                        setBgColor("bg-winter")

                    }
                }

            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className={`h-auto snap-y snap-mandatory ${bgColor} transition duration-1000`}>
            <Navigation />
            <Title />
            <section className='season snap-start'  id="spring">
                <Spring bgColor={bgColor} sLan={SEASONS_IN_ALL_LANGUAGES.spring} />
            </section>
            <section className='season snap-start' id="summer">
                <Summer bgColor={bgColor} sLan={SEASONS_IN_ALL_LANGUAGES.summer} />
            </section>
            <section className='season snap-start' id="autumn">
                <Autumn bgColor={bgColor} sLan={SEASONS_IN_ALL_LANGUAGES.autumn} />
            </section>
            <section className='season snap-start' id="winter">
                <Winter bgColor={bgColor} sLan={SEASONS_IN_ALL_LANGUAGES.winter} />
            </section>
            <Reference/>
        </div>


    )
}

export default Home