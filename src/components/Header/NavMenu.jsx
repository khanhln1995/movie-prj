import MenuItem from "./MenuItem";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function NavMenu() {
    return (
        <div className="flex items-center gap-4">
            <MenuItem title="Chủ Đề" />
            <MenuItem
                title="Thể loại"
                icon={faCaretDown}
                dropdownItems={[
                    "Anime", "Bí Ẩn", "Chiến Tranh", "Chiếu Rạp",
                    "Chuyển Thể", "Chính Kịch", "Chính Luận", "Chính Trị",
                    "Chương Trình Truyền Hình", "Cung Đấu", "Cuối Tuần", "Cách Mạng",
                    "Cổ Trang", "Cổ Tích", "Cổ Điển", "DC",
                    "Disney", "Gay Cấn", "Gia Đình", "Giáng Sinh",
                    "Giả Tưởng", "Hoàng Cung", "Hoạt Hình", "Hài",
                    "Hành Động", "Hình Sự", "Học Đường", "Khoa Học",
                    "Kinh Dị", "Kinh Điển", "Kịch Nói", "Kỳ Ảo",
                    "LGBT+", "Live Action", "Lãng Mạn", "Lịch Sử",
                    "Mavel", "Miền Viễn Tây", "Nghề Nghiệp", "Người Mẫu",
                    "Nhạc Kịch", "Phiêu Lưu", "Phép Thuật", "Siêu Anh Hùng",
                    "Thiếu Nhi", "Thần Thoại", "Thể Thao", "Truyền Hình Thực Tế",
                    "Tuổi Trẻ", "Tài Liệu", "Tâm Lý", "Tình Cảm",
                    "Tập Luyện", "Viễn Tưởng", "Võ Thuật", "Xuyên Không",
                    "Đau Thương", "Đời Thường", "Ẩm Thực"
                ]}
            />
            <MenuItem title="Phim Lẻ" />
            <MenuItem title="Phim Bộ" />
            <MenuItem title="Xem Chung" />
            <MenuItem
                title="Quốc gia"
                icon={faCaretDown}
                dropdownItems={[
                    "Anh", "Canada", "Hàn Quốc", "Hồng Kông", "Mỹ", "Nhật Bản", "Pháp", "Thái Lan", "Trung Quốc", "Úc", "Đài Loan", "Đức"
                ]}
            />
            <MenuItem title="Diễn Viên" />
            <MenuItem title="Lịch chiếu" />
            <MenuItem title="Rổ Bóng" badge="NEW" />
        </div>
    );
}

export default NavMenu;