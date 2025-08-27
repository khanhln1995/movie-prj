import Tags from "./Tags";
import Action from "./Action";

function MovieInfo() {
    return (
        <div className="relative z-[5] max-w-[700px] w-full h-[619.89px] px-[50px] py-[100px] opacity-100">
            <div className="w-[540px] h-[442.28px]">
                {/* Logo phim */}
                <div className="mb-4">
                    <a className="cursor-pointer no-underline">
                        <img
                            className="max-w-[500px] max-h-[130px] align-middle"
                            src="https://static.nutscdn.com/vimg/0-260/ef39e6430dd40aae938a87909bdcbbe1.png"
                            alt="movie logo"
                        />
                    </a>
                </div>

                {/* Tựa đề */}
                <h3 className="text-[1.1em] leading-[1.5] font-light mb-4">
                    <a
                        className="no-underline cursor-pointer text-yellow-300 text-[15.4px]"
                        title="Superman"
                        href="https://www.rophim.me/phim/superman.2oiIHdCZ"
                    >
                        Superman
                    </a>
                </h3>

                {/* Thông tin chi tiết */}
                <div className="flex items-center flex-wrap gap-[0.6rem] mb-3">
                    <div className="w-[60.17px] h-[26px] border border-[#f0d25c] rounded-[0.33rem] text-white text-[12px] px-[0.4rem] inline-flex items-center">
                        <span className="relative font-medium pr-1 text-[10px] before:content-['IMDb'] before:text-[#f0d25c] before:pr-1">
                            7.6
                        </span>
                    </div>
                    <div className="px-[0.4rem] rounded-[0.33rem] h-[26px] text-[12px] font-bold flex items-center justify-center text-black bg-gradient-to-br from-[#FFD875] to-white">
                        4K
                    </div>
                    <div className="font-bold rounded-[0.33rem] flex items-center text-[12px] bg-white text-black px-[0.5rem]">
                        T13
                    </div>
                    <div className="border border-white bg-white/10 h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]">
                        2025
                    </div>
                    <div className="border border-white bg-white/10 h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px]">
                        2h 10m
                    </div>
                </div>

                {/* Thể loại */}
                <Tags />

                {/* Mô tả */}
                <div className="w-[600px] text-[14px] leading-[1.6] text-white font-normal mb-6 mt-6 line-clamp-2">
                    Superman, một phóng viên tập sự ở Metropolis, bắt đầu cuộc hành trình
                    dung hòa di sản Krypton trong bản thân mình với quá trình trưởng thành
                    của con người với tư cách là Clark Kent.
                </div>

                {/* Nút hành động */}
                <Action />
            </div>
        </div>
    );
}

export default MovieInfo;
