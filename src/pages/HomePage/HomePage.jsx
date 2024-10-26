import { Banner } from "../../components/banner/Banner"
import { Fade } from "../../components/slider/Slider";
import { Accordeon } from "../../components/accordeon/Accordeon"

export function HomePage() {
    return (
        <section>
            <Banner />
            <div className="slider container">
                <h2>Slider</h2>
                <Fade/>
            </div>
            <Accordeon/>
        </section>
        )
}