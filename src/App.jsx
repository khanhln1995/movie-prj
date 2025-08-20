import logo from "./assets/img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMagnifyingGlass, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen">

      <img
        src="https://static.nutscdn.com/vimg/1920-0/f105d609e2cc3c8ce1c29f999f42bb9d.webp"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <header className="relative z-10 px-8 gap-8 flex justify-between items-center w-full h-[90px] text-white bg-gradient-to-b from-black/80 to-transparent">

        <div>
          <img src={logo} alt="logo" className="w-[154.55px] h-[46px] object-fill cursor-pointer" />
        </div>

        <div className="relative">
          <div className="absolute  left-4 top-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm phim, diễn viên"
            className="text-sm font-normal placeholder-white w-[317.86px] h-[2.8rem] leading-8 px-12 py-[0.4rem] bg-white/10 text-white  rounded-md border border-transparent focus:outline-none focus:ring-0" />
        </div>

        <div className="flex items-center gap-4">
          <a className="flex items-center shrink-0 whitespace-nowrap px-3 leading-[36px] text-white cursor-pointer no-underline text-sm font-normal" href="#">Chủ Đề</a>
          <a className="flex items-center shrink-0 whitespace-nowrap px-3 leading-[36px] text-white cursor-pointer no-underline text-sm font-normal" href="#">Thể loại <FontAwesomeIcon icon={faCaretDown} className="ml-1" /></a>
          <a className="flex items-center shrink-0 whitespace-nowrap px-3 leading-[36px] text-white cursor-pointer no-underline text-sm font-normal" href="#">Phim Lẻ</a>
          <a className="flex items-center shrink-0 whitespace-nowrap px-3 leading-[36px] text-white cursor-pointer no-underline text-sm font-normal" href="#">Phim Bộ</a>
          <a className="flex items-center shrink-0 whitespace-nowrap px-3 leading-[36px] text-white cursor-pointer no-underline text-sm font-normal" href="#">Xem Chung</a>
          <a className="flex items-center shrink-0 whitespace-nowrap px-3 leading-[36px] text-white cursor-pointer no-underline text-sm font-normal" href="#">Quốc gia <FontAwesomeIcon icon={faCaretDown} className="ml-1" /></a>
          <a className="flex items-center shrink-0 whitespace-nowrap px-3 leading-[36px] text-white cursor-pointer no-underline text-sm font-normal" href="#">Diễn Viên</a>
          <a className="flex items-center shrink-0 whitespace-nowrap px-3 leading-[36px] text-white cursor-pointer no-underline text-sm font-normal" href="#">Lịch chiếu</a>
          <a className="flex items-center shrink-0 whitespace-nowrap px-3 leading-[36px] text-white cursor-pointer no-underline text-sm font-normal" href="#"><span className="mr-2 text-[10px] font-medium px-[2.5px] py-[2px] leading-none bg-yellow-300 rounded-[3px] text-black">NEW</span>Rổ Bóng</a>
        </div>


        <div className="shrink-0 pr-4 border-r border-[#fff4] relative">
          <a className="h-[44px] px-5 flex justify-center items-center gap-3 cursor-pointer">
            <svg className="w-9 h-9" id="Pc" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9998 16.8992C11.1655 16.8992 11.2998 16.7649 11.2998 16.5992V11.5982C11.2998 9.28322 13.1838 7.39922 15.4998 7.39922H18.7998C18.9238 7.39922 19.0446 7.41106 19.1616 7.43327C19.3745 7.47368 19.5998 7.32682 19.5998 7.11012V6.69922C19.5998 6.67022 19.5968 6.64022 19.5918 6.61222C19.2488 4.66722 17.4468 3.19922 15.4008 3.19922H6.79982C4.42882 3.19922 2.49982 5.12822 2.49982 7.49922V12.5982C2.49982 14.9692 4.42882 16.8992 6.79982 16.8992H8.24282L7.86182 19.2492H5.85982C5.44582 19.2492 5.10982 19.5852 5.10982 19.9992C5.10982 20.4132 5.44582 20.7492 5.85982 20.7492H10.7598C11.1738 20.7492 11.5098 20.4132 11.5098 19.9992C11.5098 19.5852 11.1738 19.2492 10.7598 19.2492H9.38082L9.76182 16.8992H10.9998Z" fill="#FFD875"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1912 18.4564C16.7712 18.4564 16.4302 18.1154 16.4302 17.6954C16.4302 17.2754 16.7712 16.9344 17.1912 16.9344C17.6112 16.9344 17.9522 17.2754 17.9522 17.6954C17.9522 18.1154 17.6112 18.4564 17.1912 18.4564ZM18.8002 8.90039H15.5002C14.0362 8.90039 12.8002 10.1364 12.8002 11.5994V18.0994C12.8002 19.5884 14.0112 20.7994 15.5002 20.7994H18.8002C20.2892 20.7994 21.5002 19.5884 21.5002 18.0994V11.5994C21.5002 10.1364 20.2642 8.90039 18.8002 8.90039Z" fill="#ffffff"></path>
            </svg>
            <div className="flex flex-col gap-[0.3rem] text-[12px] leading-[1.1]">
              <span className="text-[12px]">Tải ứng dụng</span>
              <strong className="text-[14px] font-bold">RoPhim</strong>
            </div>
          </a>

        </div>

        <a
          onClick={() => setModalOpen(true)}
          className="cursor-pointer flex items-center gap-2 bg-white text-sm h-[43.77px] py-[9.6px] px-[22.4px] rounded-full text-black font-medium whitespace-nowrap min-w-[145px] text-center"
        >
          <FontAwesomeIcon icon={faUser} />
          <span>
            Thành viên
          </span>
        </a>

        {/* Modal */}
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      </header>

      <div id="content">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
