import { allTopics } from "../data/topics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function AllTopics() {
    return (
        <div className="w-full px-[50px] mx-auto max-w-[1905px] relative pt-[160px] pb-[160px] bg-gradient-to-t from-black to-[#20222e]" >
            {/* Tiêu đề */}
            <div className="flex items-center justify-start gap-4 relative min-h-[44px] mb-[2rem]">
                <h3 className="text-[28px] leading-[1.4] font-semibold m-0 text-white [text-shadow:0_2px_1px_rgba(0,0,0,0.3)]">
                    Các chủ đề
                </h3>
            </div>

            {/* Grid danh sách */}
            <div className="grid grid-cols-7 gap-4 justify-between items-stretch mt-0">
                {allTopics.map((topic, idx) => (
                    <a
                        key={idx}
                        href={topic.link}
                        className="relative flex flex-col rounded-xl overflow-hidden group cursor-pointer no-underline w-[243px] h-[152px]
              transform transition-transform duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
                    >
                        {/* Background màu */}
                        <div
                            className="absolute inset-0"
                            style={{ backgroundColor: topic.color }}
                        ></div>

                        {/* Nội dung */}
                        <div className="relative z-[3] flex flex-col items-start justify-end w-full h-full px-6 pb-6 gap-4">
                            <div className="font-bold text-[28px] text-white leading-[1.3] [text-shadow:0_1px_0_#0002] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                                {topic.name}
                            </div>
                            <div className="inline-flex items-center text-white text-[14px] font-bold opacity-90 transition-opacity duration-300 hover:opacity-70 ">
                                <span>Xem toàn bộ</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
