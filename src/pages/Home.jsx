import { useState } from "react";
import Section from "../components/Content/Slider/Section";
import Topics from "../components/Content/Topics/Topics";
import { images } from "../data/images";

export default function Home() {
    const [slides, setSlides] = useState(images);

    const handleSlideClick = (index) => {
        setSlides(slides.map((img, i) => ({ ...img, isActive: i === index })));
    };

    return (
        <div>
            <Section slides={slides} onSlideClick={handleSlideClick} />
            <Topics />
        </div>
    );
}
