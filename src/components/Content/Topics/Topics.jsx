import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { topics } from "../../../data/topics";

export default function Topics() {
    const navigate = useNavigate();

    return (
        <div className="w-full relative bg-gradient-to-t from-black to-[#161927]">
            <div className="w-full max-w-[1900px] relative mx-[2.5px] px-[50px] pt-9">
                {/* Tiêu đề */}
                <div className="flex items-center justify-start gap-4 relative min-h-[44px] mb-[1.2rem]">
                    <h3 className="text-[28px] leading-[1.4] font-semibold m-0 text-white [text-shadow:0_2px_1px_rgba(0,0,0,0.3)]">
                        Bạn đang quan tâm gì?
                    </h3>
                </div>

                {/* Grid danh sách topic */}
                <div className="grid grid-cols-7 gap-4 justify-between items-stretch mt-0">
                    {topics.map((topic, idx) => (
                        <a
                            key={idx}
                            href={topic.link}
                            className="relative flex flex-col rounded-xl overflow-hidden group cursor-pointer no-underline w-[243px] h-[152px]
                  transform transition-transform duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
                        >
                            <div className="absolute inset-0" style={{ backgroundColor: topic.color }}></div>
                            <div className="relative z-[3] flex flex-col items-start justify-end w-full h-full px-6 pb-6 gap-4">
                                <div className="font-bold text-[28px] text-white leading-[1.3] [text-shadow:0_1px_0_#0002] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                                    {topic.name}
                                </div>
                                <div className="inline-flex items-center text-white text-[14px] font-bold opacity-90 transition-opacity duration-300 hover:opacity-70">
                                    <span>Xem chủ đề</span>
                                    <FontAwesomeIcon icon={faAngleRight} className="ml-1" />
                                </div>
                            </div>
                        </a>
                    ))}

                    {/* +4 Chủ đề */}
                    <div
                        onClick={() => navigate("/chu-de")}
                        className="relative flex items-center justify-center rounded-xl overflow-hidden group cursor-pointer no-underline w-[243px] h-[152px]
                transform transition-transform duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
                    >
                        <div className="absolute inset-0 bg-[rgb(46,50,69)]"></div>
                        <div className="relative z-[3] text-white font-bold text-[28px]">
                            +4 chủ đề
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
