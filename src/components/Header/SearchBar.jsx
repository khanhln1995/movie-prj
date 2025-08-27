import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar({ icon }) {
    return (
        <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <FontAwesomeIcon icon={icon} />
            </div>
            <input
                type="text"
                placeholder="Tìm kiếm phim, diễn viên"
                className="text-sm placeholder-white w-[317.86px] h-[2.8rem] px-12 py-[0.4rem]
                   bg-[#ffffff14] text-white rounded-md border border-transparent focus:border-white
                   focus:outline-none focus:ring-0"
            />
        </div>
    );
}

export default SearchBar;