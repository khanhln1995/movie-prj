import MenuItem from "./MenuItem";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function NavMenu() {
    return (
        <div className="flex items-center gap-4">
            <MenuItem title="Chủ Đề" />
            <MenuItem title="Thể loại" icon={faCaretDown} />
            <MenuItem title="Phim Lẻ" />
            <MenuItem title="Phim Bộ" />
            <MenuItem title="Xem Chung" />
            <MenuItem title="Quốc gia" icon={faCaretDown} />
            <MenuItem title="Diễn Viên" />
            <MenuItem title="Lịch chiếu" />
            <MenuItem title="Rổ Bóng" badge="NEW" />
        </div>
    );
}

export default NavMenu;