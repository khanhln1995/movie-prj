import MovieInfo from "../../Content/Slider/MovieInfo";
import SlideList from "../../Content/Slider/SlideList";

function Section({ slides = [], onSlideClick = () => { } }) {
    const activeSlide = slides.find((s) => s.isActive) || slides[0] || {};

    return (
        <div className="relative w-full h-[calc(100vh-72px)]">
            {/* Background big image → đổi khi click thumbnail */}
            {/* Background lấy bgUrl */}
            {activeSlide.bgUrl && (
                <img
                    src={activeSlide.bgUrl}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover z-0 brightness-80 transition-all duration-500"
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#161927] via-transparent to-black/50 z-[1]" />

            {/* Content */}
            <div className="cursor-grab w-full h-full max-w-[1900px] mx-auto overflow-hidden z-[2] relative flex items-end">
                <MovieInfo movie={activeSlide} />
                <SlideList slides={slides} onSlideClick={onSlideClick} />
            </div>
        </div>
    );
}

export default Section;
