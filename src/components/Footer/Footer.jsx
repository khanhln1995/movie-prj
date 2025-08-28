function Footer() {
    return (
        <footer className="bg-[#0F111A]">
            <div className="w-full max-w-[1900px] px-[50px] mx-auto">
                <div className="relative min-h-[400px] py-8 flex items-center justify-between">

                    {/* Logo giữa */}
                    <div className="absolute z-[1] w-[756px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img className=" h-[400px]" src="https://www.rophim.me/images/footer-icon.svg" alt="footer icon" />
                    </div>

                    {/* Nội dung bên trái */}
                    <div className="block max-w-[750px]">

                        {/* Banner Hoàng Sa Trường Sa */}
                        <div className="mb-6">
                            <div className="text-[14px] text-white px-3 py-2 rounded-2xl bg-[#78140f] inline-flex items-center gap-2">
                                <div className="w-5 h-5">
                                    <img src="https://www.rophim.me/images/vn_flag.svg" alt="VietNam" />
                                </div>
                                <span>Hoàng Sa & Trường Sa là của Việt Nam!</span>
                            </div>
                        </div>

                        {/* Logo + Social */}
                        <div className="inline-flex items-center gap-12 mb-8">
                            <a>
                                <img className="h-[60px] w-auto cursor-pointer" src="https://www.rophim.me/images/logo.svg" alt="RoPhim" />
                            </a>
                            <div className="inline-flex items-center gap-3 pl-12 border-l border-[#ffffff10]">
                                {[
                                    { href: "https://t.me/congdongrophim", src: "https://www.rophim.me/images/social/telegram-icon.svg", title: "Telegram" },
                                    { href: "https://discord.com/invite/rophim", src: "https://www.rophim.me/images/social/discord-icon.svg", title: "Discord" },
                                    { href: "https://x.com/rophimtv", src: "https://www.rophim.me/images/social/x-icon.svg", title: "X" },
                                    { href: "https://www.facebook.com/rophimorg/", src: "https://www.rophim.me/images/social/facebook-icon.svg", title: "Facebook" },
                                    { href: "https://www.tiktok.com/@rophimtv", src: "https://www.rophim.me/images/social/tiktok-icon.svg", title: "Tiktok" },
                                    { href: "https://www.youtube.com/@rophimcom", src: "https://www.rophim.me/images/social/youtube-icon.svg", title: "Youtube" },
                                    { href: "https://www.threads.com/@rophimtv", src: "https://www.rophim.me/images/social/threads-icon.svg", title: "Threads" },
                                    { href: "https://www.instagram.com/rophimtv", src: "https://www.rophim.me/images/social/instagram-icon.svg", title: "Instagram" },
                                ].map((item, i) => (
                                    <a
                                        key={i}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 cursor-pointer"
                                        title={item.title}
                                        href={item.href}
                                    >
                                        <div className="w-[14px] h-[14px]">
                                            <img
                                                src={item.src}
                                                alt={item.title}
                                            />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="mb-4">
                            {[
                                { href: "https://www.rophim.me/hoi-dap", text: "Hỏi-Đáp" },
                                { href: "https://www.rophim.me/chinh-sach-bao-mat", text: "Chính sách bảo mật" },
                                { href: "https://www.rophim.me/dieu-khoan-su-dung", text: "Điều khoản sử dụng" },
                                { href: "https://www.rophim.me/gioi-thieu", text: "Giới thiệu" },
                                { href: "https://www.rophim.me/lien-he", text: "Liên hệ" },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    className="text-[14px] mr-6 cursor-pointer text-white no-underline hover:text-yellow-300"
                                    href={item.href}
                                >
                                    {item.text}
                                </a>
                            ))}
                        </div>

                        {/* Liên kết khác */}
                        <div className="mb-4">
                            {[
                                { href: "https://www.rophim.me/dongphim", text: "Dongphim" },
                                { href: "https://www.rophim.me/ghienphim", text: "Ghienphim" },
                                { href: "https://www.rophim.me/motphim", text: "Motphim" },
                                { href: "https://www.rophim.me/subnhanh", text: "Subnhanh" },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    className="text-[14px] mr-6 cursor-pointer text-white no-underline hover:text-yellow-300"
                                    href={item.href}
                                >
                                    {item.text}
                                </a>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="text-[14px] text-[#AAAAAA] mb-[8px]">
                            RoPhim – Phim hay cả rổ - Trang xem phim online chất lượng cao miễn phí Vietsub, thuyết minh, lồng tiếng full HD. Kho phim mới khổng lồ, phim chiếu rạp,
                            phim bộ, phim lẻ từ nhiều quốc gia như Việt Nam, Hàn Quốc, Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ… đa dạng thể loại. Khám phá nền tảng phim trực tuyến hay
                            nhất 2024 chất lượng 4K!
                        </div>
                        <div className="text-[14px] text-[#AAAAAA]">© 2024 RoPhim</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;