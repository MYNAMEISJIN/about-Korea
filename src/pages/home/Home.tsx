import React from 'react'
import Spring from '../../components/Spring'
import { Summer } from '../../components/Summer'
import Autumn from '../../components/Autumn'
import { Winter } from '../../components/Winter'
import { Navigation } from '../../components/Navigation'
import { Title } from '../../components/Title'

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
                    if (start > (start-stop)/4 && stop < 0) {
                        setBgColor("bg-spring")
            
                    }
                }
                if (rate === "summer") {
                    
                    if (start > (start-stop)/4 && stop < 0) {
                        setBgColor("bg-summer")
                  
                    }

                }
                if (rate === "autumn") {
                    if (start > (start-stop)/4 && stop < 0) {
                        setBgColor("bg-autumn")
                
                    }
                }
                if (rate === "winter") {
                    if (start > (start-stop)/4 && stop < 0) {
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
            <section className='season snap-start' id="spring">
                <Spring bgColor={bgColor}/>
            </section>
            <section className='season snap-start' id="summer">
                <Summer bgColor={bgColor}/>
            </section>
            <section className='season snap-start' id="autumn">
                <Autumn bgColor={bgColor}/>
            </section>
            <section className='season snap-start' id="winter">
                <Winter bgColor={bgColor}/>
            </section>
        </div>


    )
}

export default Home