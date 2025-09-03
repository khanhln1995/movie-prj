import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function Action({ movie }) {
    return (
        <div className="flex items-center gap-[32px]">
            {/* Play button */}
            <a
                href={movie?.link || "#"}
                className="text-[26px] w-[70px] h-[70px] rounded-full flex items-center justify-center opacity-95 hover:shadow-[0_5px_10px_10px_#ffda7d26] bg-gradient-to-br from-yellow-400 to-yellow-100 cursor-pointer"
            >
                <FontAwesomeIcon icon={faPlay} />
            </a>

            {/* Like + Info */}
            <div className="w-[140px] h-[54px] inline-flex border-2 border-[rgba(255,255,255,0.1)] rounded-[30px] overflow-hidden hover:border-white">
                <a className="text-[20px] text-white flex-1 flex items-center justify-center hover:text-yellow-300 hover:bg-white/10 cursor-pointer">
                    <FontAwesomeIcon icon={faHeart} />
                </a>
                <a className="text-white border-l-2 border-[rgba(255,255,255,0.06)] text-[20px] flex-1 flex items-center justify-center hover:text-yellow-300 hover:bg-white/10 cursor-pointer">
                    <FontAwesomeIcon icon={faCircleInfo} />
                </a>
            </div>
        </div>
    );
}

export default Action;
