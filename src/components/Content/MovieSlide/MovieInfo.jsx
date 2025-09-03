import Action from "../MovieSlide/Action";

function MovieInfo({ movie }) {
    if (!movie) return null

    return (
        <div className="relative z-[5] max-w-[700px] w-full h-[619.89px] px-[50px] py-[100px] opacity-100">
            <div className="w-[540px] h-[442.28px]">
                {/* Logo phim */}
                <div className="mb-4">
                    <a className="cursor-pointer no-underline">
                        <img
                            className="max-w-[500px] max-h-[130px] align-middle"
                            src={movie.logo}
                            alt="movie logo"
                        />
                    </a>
                </div>

                {/* Tựa đề */}
                {movie.title && (
                    <h3 className="text-[1.1em] leading-[1.5] font-light mb-4">
                        <a
                            className="no-underline cursor-pointer text-yellow-300 text-[15.4px]"
                            title="Superman"
                            href={movie.link || "#"}
                        >
                            {movie.title}
                        </a>
                    </h3>
                )}

                {/* Thông tin chi tiết */}
                <div className="flex items-center flex-wrap gap-[0.6rem] mb-3">
                    {movie.imdb && (
                        <div className="h-[26px] border border-[#f0d25c] rounded-[0.33rem] px-2 inline-flex items-center">
                            <span className="text-[10px] font-semibold text-[#f0d25c] mr-1">IMDb</span>
                            <span className="text-[12px] font-bold text-white leading-none">{movie.imdb}</span>
                        </div>
                    )}


                    {movie.quality && (
                        <div className="px-[0.4rem] rounded-[0.33rem] h-[26px] text-[12px] font-bold flex items-center justify-center text-black bg-gradient-to-br from-[#FFD875] to-white">
                            {movie.quality}
                        </div>
                    )}

                    {movie.age && (
                        <div className="font-bold rounded-[0.33rem] flex items-center h-[26px] text-[12px] bg-white text-black px-[0.5rem]">
                            {movie.age}
                        </div>
                    )}

                    {movie.year && (
                        <div className="border border-white bg-white/10 h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]">
                            {movie.year}
                        </div>
                    )}

                    {movie.duration && (
                        <div className="border border-white bg-white/10 h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]">
                            {movie.duration}
                        </div>
                    )}
                </div>

                {/* Thể loại */}
                {movie.tags && movie.tags.length > 0 && (
                    <div className="flex items-center gap-[9.6px] flex-wrap">
                        {movie.tags.map((tag, i) => (
                            <a
                                key={i}
                                className="hover:text-yellow-300 bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px] cursor-pointer no-underline"
                            >
                                {tag}
                            </a>
                        ))}
                    </div>
                )}

                {/* Mô tả */}
                {movie.description && (
                    <div className="w-[600px] text-[14px] leading-[1.6] text-white font-normal mb-6 mt-6 line-clamp-3">
                        {movie.description}
                    </div>
                )}

                {/* Nút hành động */}
                <Action movie={movie} />
            </div>
        </div>
    );
}

export default MovieInfo;
