import Slide from "./Slide";

function SlideList({ slides, onSlideClick }) {
    return (
        <div className="mt-[20px] absolute w-[450px] bottom-[212px] right-[calc(50%-900px)] mx-auto overflow-hidden z-[1]">
            <div className="relative w-full h-full flex">
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        image={slide}
                        onClick={() => onSlideClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default SlideList;
