function Slide({ image, onClick }) {

    return (
        <div
            onClick={onClick}
            className={`w-[70.8333px] h-[45px] mr-[5px] relative cursor-pointer border-2 rounded-[0.5rem] overflow-hidden
        ${image.isActive ? "border-white scale-105" : "border-[#ffffff24] hover:border-white"}`}
        >
            {image && (
                <img className="w-full h-full object-cover bg-[#282B3A] align-middle"
                    src={image.thumbUrl}
                    alt="thumb" />
            )}
        </div>
    );
}

export default Slide;