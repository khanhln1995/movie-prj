import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div className="rounded-xl border-none w-[860px] h-[573.56px] bg-blue-950 relative flex"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Cột ảnh */}
                <div className="w-[420px] h-full">
                    <img
                        src="https://www.rophim.me/images/rophim-login.jpg"
                        alt="login"
                        className="w-full h-full object-cover rounded-l-xl"
                    />
                </div>

                {/* Nút đóng */}
                <button
                    className="absolute top-0 right-0 w-10 h-10 p-0 text-white border-none cursor-pointer"
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                {/* Form đăng nhập */}
                <div className="flex-1 p-16 text-white">
                    <div>
                        <h4 className="text-[19.6px] font-semibold leading-[1.5] mb-2 text-white">Đăng nhập</h4>
                    </div>
                    <div>
                        <p className="mb-6 text-[14px] text-[#FFFFFF99]">Nếu bạn chưa có tài khoản, <a className="text-yellow-300 cursor-pointer">đăng ký ngay</a></p>
                        <form className="space-y-4">
                            <div className="">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-full bg-transparent h-[42px] border border-[#ffffff10] rounded-[0.4rem] text-white text-[0.95em] px-[1rem] py-[0.5rem]"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Mật khẩu"
                                    className="w-full bg-transparent h-[42px] border border-[#ffffff10] rounded-[0.4rem] text-white text-[0.95em] px-[1rem] py-[0.5rem]"
                                />
                            </div>
                            <div>
                                <button className="w-full bg-yellow-300 text-black text-[14px] py-[8px] px-[17.6px] font-semibold cursor-pointer rounded-lg">Đăng nhập</button>
                            </div>
                            <div className="text-center">
                                <a href="#" className="text-[12.25px] cursor-pointer text-white no-underline">Quên mật khẩu?</a>
                            </div>
                            <div className=" w-[220px] bg-white text-black text-[14px] py-[8px] px-[17.6px] cursor-pointer rounded-lg">Đăng nhập bằng Google</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;