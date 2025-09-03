import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Section from "./components/Content/MovieSlide/Section";
import Footer from "./components/Footer/Footer";
import ModalLogin from "./components/Modal/ModalLogin";
import ModalRegister from "./components/Modal/ModalRegister";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const images = [
  {
    isActive: true,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/f105d609e2cc3c8ce1c29f999f42bb9d.webp",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/f105d609e2cc3c8ce1c29f999f42bb9d.webp",
    logo: "https://static.nutscdn.com/vimg/0-260/ef39e6430dd40aae938a87909bdcbbe1.png",
    title: "Superman",
    link: "https://www.rophim.me/phim/superman.2oiIHdCZ",
    imdb: "7.6",
    quality: "4K",
    age: "T13",
    year: "2025",
    duration: "2h 10m",
    tags: ["Hành Động", "Chiếu Rạp", "DC", "Siêu Anh Hùng", "Khoa Học", "Kỳ Ảo"],
    description:
      "Superman, một phóng viên tập sự ở Metropolis, bắt đầu cuộc hành trình dung hòa di sản Krypton trong bản thân mình với quá trình trưởng thành của con người với tư cách là Clark Kent."
  },
  {
    isActive: false,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/fdf26f9295adea7a951f615d6171cfc2.jpg",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/fdf26f9295adea7a951f615d6171cfc2.jpg",
    logo: "https://static.nutscdn.com/vimg/0-260/b27bc01f8898465b7a025a22582a00f9.png",
    title: "Weapons",
    link: "https://www.rophim.me/phim/gio-mat-tich.iSSlfpj2",
    age: "T18",
    year: "2025",
    duration: "2h 09m",
    tags: ["Chiếu Rạp", "Kinh Dị", "Bí Ẩn", "Tâm Lý"],
    description:
      "Vụ mất tích bí ẩn của 17 đứa trẻ lúc 2:17 sáng thứ Tư chỉ là bắt đầu cho chuỗi sự kiện kinh hoàng tại Maybrook. "
  },
  {
    isActive: false,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/29cca985f832ea53a5cefa528fa7f666.webp",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/29cca985f832ea53a5cefa528fa7f666.webp",
    logo: "https://static.nutscdn.com/vimg/0-260/f4ba899bc021b4de498255efd6011274.png",
    title: "Together",
    link: "https://www.rophim.me/phim/dinh-leo.VhDdEIna",
    quality: "4K",
    age: "T18",
    year: "2025",
    duration: "1h 42m",
    tags: ["Chiếu Rạp", "Gay Cấn", "Kinh Dị", "Tâm Lý"],
    description:
      "Việc chuyển về vùng quê hẻo lánh đã đủ khiến mối quan hệ của cặp đôi này đứng bên bờ vực tan vỡ — nhưng một cuộc chạm trán siêu nhiên bất ngờ lại khởi đầu cho một sự biến đổi cực đoan về tình yêu, cuộc sống… và cả thể xác của họ."
  },
  {
    isActive: false,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/930d4b7f9669d7ebbaedf7553827f0e1.webp",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/930d4b7f9669d7ebbaedf7553827f0e1.webp",
    logo: "https://static.nutscdn.com/vimg/0-260/5ced6fb31801f8d66238cbdfaa23136d.webp",
    title: "I Know What You Did Last Summer",
    link: "https://www.rophim.me/phim/mua-he-kinh-hai.8MvssBEF",
    quality: "4K",
    age: "T18",
    year: "2025",
    duration: "1h 51m",
    tags: ["Chiếu Rạp", "Gay Cấn", "Kinh Dị", "Bí Ẩn", "Tâm Lý"],
    description:
      "Khi năm người bạn vô tình gây ra một vụ tai nạn xe hơi chết người, họ quyết định che giấu và lập một giao ước giữ bí mật thay vì phải đối mặt với hậu quả. Một năm sau, quá khứ trở lại ám ảnh họ, buộc họ phải đối diện với một sự thật khủng khiếp: có ai đó biết những gì họ đã làm vào mùa hè năm ngoái… và quyết tâm trả thù họ. Khi từng người trong nhóm bị một kẻ sát nhân truy đuổi, họ phát hiện ra rằng điều này đã xảy ra trước đây, và họ tìm đến hai người sống sót từ vụ thảm sát huyền thoại ở Southport năm 1997 để cầu cứu."
  },
  {
    isActive: false,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/631d1f132c05fcf7a5ff095fa5b322b4.jpg",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/631d1f132c05fcf7a5ff095fa5b322b4.jpg",
    logo: "https://static.nutscdn.com/vimg/0-260/0e7257a6bfb5434095c2d425aa7306a5.png",
    title: "Elio",
    link: "https://www.rophim.me/phim/elio-cau-be-den-tu-trai-dat.ZoLoFltF",
    imdb: "7.0",
    quality: "4K",
    age: "K",
    year: "2025",
    duration: "1h 37m",
    tags: ["Chiếu Rạp", "Gia Đình", "Khoa Học", "Thiếu Nhi", "Hài", "Hoạt Hình"],
    description:
      "Điều gì sẽ xảy ra nếu chính thứ bạn đang tìm kiếm lại tìm đến bạn trước? Trong cuộc phiêu lưu dở khóc dở cười trên màn ảnh rộng của Pixar, Elio – cậu bé mê mẩn người ngoài hành tinh – bất ngờ bị cuốn vào Liên Hiệp Thiên Hà, một vũ trụ liên hành tinh đầy kỳ diệu, nơi quy tụ các loài sinh vật thông minh khắp thiên hà. Trớ trêu thay, Elio lại bị hiểu nhầm là người đứng đầu Trái Đất. Giờ đây, cậu phải vượt qua những rắc rối mang quy mô vũ trụ, kết nối với những người bạn không ngờ tới, và tìm cách biến giấc mơ lớn nhất đời mình thành hiện thực."
  },
  {
    isActive: false,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/08eca7a9d13049739a1df18a304dc0c3.webp",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/08eca7a9d13049739a1df18a304dc0c3.webp",
    logo: "https://static.nutscdn.com/vimg/0-260/52e5571ca5743721ede0a139b273d54e.png",
    title: "Love Untangled",
    link: "https://www.rophim.me/phim/chuyen-tinh-toc-roi.Mx5mHqko",
    age: "T13",
    year: "2025",
    duration: "1h 58m",
    tags: ["Chính Kịch", "Hài", "Tuổi Trẻ", "Học Đường", "Lãng Mạn"],
    description:
      "Một thiếu nữ si tình lên kế hoạch chinh phục nam thần của trường bằng cách chuyển từ tóc xoăn sang tóc thẳng – cho đến khi một học sinh mới chuyển đến thay đổi mọi chuyện."
  }
]


function App() {
  const [scroll, setScroll] = useState(false)
  const [slides, setSlides] = useState(images)

  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  const handleSlideClick = (index) => {
    const updated = slides.map((img, i) => ({
      ...img,
      isActive: i === index,
    }));
    setSlides(updated);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <Header scroll={scroll} onOpenLogin={() => setIsLoginOpen(true)} />

      {/* Content */}
      {/* Slider */}
      <main className="flex-1 relative">
        <div className="relative h-[88vh]">
          <Section slides={slides} onSlideClick={handleSlideClick} />
        </div>

        <div className="relative z-9 pt-0 !pb-[10rem] min-h-[calc(100vh-400px)]">
          <div className="flex flex-col gap-[50px]">

            {/* Bạn đang quan tâm gì ? */}
            <div className="w-full px-[50px] mx-auto max-w-[1900px] relative">

              <div className="flex items-center justify-start gap-4 relative min-h-[44px] mb-[1.2rem]">
                <h3 className="text-[28px] leading-[1.4] font-semibold m-0 text-white [text-shadow:0_2px_1px_rgba(0,0,0,0.3)]">
                  Bạn đang quan tâm gì?
                </h3>
              </div>


              <div className="grid grid-cols-7 gap-4 justify-between items-stretch mt-0">

                {/* Marvel */}
                <a
                  href="/c/marvel-sieu-anh-hung.vhyYAW"
                  className="relative flex flex-col rounded-xl overflow-hidden group cursor-pointer no-underline w-[243px] h-[152px]
                  transform transition-transform duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-[rgb(50,79,209)]"></div>
                  <div className="relative z-[3] flex flex-col items-start justify-end w-full h-full px-6 pb-6 gap-3">
                    <div className="font-bold text-[28px] text-white leading-[1.3] [text-shadow:0_1px_0_#0002] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                      Marvel
                    </div>
                    <div className="inline-flex items-center text-white text-[14px] font-bold transition">
                      <span>Xem chủ đề</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </div>
                </a>

                {/* 4K */}
                <a
                  href="/c/4k.bZE4Tf"
                  className="relative flex flex-col rounded-xl overflow-hidden group cursor-pointer no-underline w-[243px] h-[152px]
                  transform transition-transform duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-[rgb(102,102,153)]"></div>
                  <div className="relative z-[3] flex flex-col items-start justify-end w-full h-full px-6 pb-6 gap-3">
                    <div className="font-bold text-[28px] text-white leading-[1.3] [text-shadow:0_1px_0_#0002]">
                      4K
                    </div>
                    <div className="inline-flex items-center text-white text-[14px] font-bold transition">
                      <span>Xem chủ đề</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </div>
                </a>

                {/* Sitcom */}
                <a
                  href="/c/sitcom-series-us.SosVge"
                  className="relative flex flex-col rounded-xl overflow-hidden group cursor-pointer no-underline w-[243px] h-[152px]
                  transform transition-transform duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-[rgb(27,133,108)]"></div>
                  <div className="relative z-[3] flex flex-col items-start justify-end w-full h-full px-6 pb-6 gap-3">
                    <div className="font-bold text-[28px] text-white leading-[1.3] [text-shadow:0_1px_0_#0002]">
                      Sitcom
                    </div>
                    <div className="inline-flex items-center text-white text-[14px] font-bold transition">
                      <span>Xem chủ đề</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </div>
                </a>

                {/* Lồng tiếng */}
                <a
                  href="/c/long-tieng-cuc-manh.PGxRUU"
                  className="relative flex flex-col rounded-xl overflow-hidden group cursor-pointer no-underline w-[243px] h-[152px]
                  transform transition-transform duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-[rgb(119,97,180)]"></div>
                  <div className="relative z-[3] flex flex-col items-start justify-end w-full h-full px-6 pb-6 gap-3">
                    <div className="font-bold text-[24px] text-white leading-[1.3] [text-shadow:0_1px_0_#0002]">
                      Lồng Tiếng Cực Mạnh
                    </div>
                    <div className="inline-flex items-center text-white text-[14px] font-bold transition">
                      <span>Xem chủ đề</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </div>
                </a>

                {/* Xuyên Không */}
                <a
                  href="/c/xuyen-khong.3TQ3S1"
                  className="relative flex flex-col rounded-xl overflow-hidden group cursor-pointer no-underline w-[243px] h-[152px]
                  transform transition-transform duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-[rgb(205,126,95)]"></div>
                  <div className="relative z-[3] flex flex-col items-start justify-end w-full h-full px-6 pb-6 gap-3">
                    <div className="font-bold text-[28px] text-white leading-[1.3] [text-shadow:0_1px_0_#0002]">
                      Xuyên Không
                    </div>
                    <div className="inline-flex items-center text-white text-[14px] font-bold transition">
                      <span>Xem chủ đề</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </div>
                </a>

                {/* Cổ Trang */}
                <a
                  href="/c/co-trang.wCSzYH"
                  className="relative flex flex-col rounded-xl overflow-hidden group cursor-pointer no-underline w-[243px] h-[152px]
                  transform transition-transform duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-[rgb(167,57,57)]"></div>
                  <div className="relative z-[3] flex flex-col items-start justify-end w-full h-full px-6 pb-6 gap-3">
                    <div className="font-bold text-[28px] text-white leading-[1.3] [text-shadow:0_1px_0_#0002]">
                      Cổ Trang
                    </div>
                    <div className="inline-flex items-center text-white text-[14px] font-bold transition">
                      <span>Xem chủ đề</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </div>
                </a>

                {/* +4 Chủ đề */}
                <a
                  href="/chu-de"
                  className="relative flex items-center justify-center rounded-xl overflow-hidden group cursor-pointer no-underline w-[243px] h-[152px]
                  transform transition-transform duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-[rgb(46,50,69)]"></div>
                  <div className="relative z-[3] text-white font-bold text-[28px]">
                    +4 chủ đề
                  </div>
                </a>
              </div>

            </div>


          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <ModalLogin
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitch={() => {
          setIsLoginOpen(false)
          setIsRegisterOpen(true)
        }}
      />

      <ModalRegister
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitch={() => {
          setIsRegisterOpen(false)
          setIsLoginOpen(true)
        }}
      />
    </div>
  );
}

export default App;
