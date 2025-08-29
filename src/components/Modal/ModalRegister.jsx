import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalRegister({ isOpen, onClose, onSwitch }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div className="rounded-xl w-[860px] h-[573px] bg-blue-950 relative flex"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Cột ảnh */}
                <div className="w-[420px] h-full">
                    <img
                        src="https://www.rophim.me/images/rophim-login.jpg"
                        alt="register"
                        className="w-full h-full object-cover rounded-l-xl"
                    />
                </div>

                {/* Nút đóng */}
                <button
                    className="absolute top-0 right-0 w-10 h-10 text-white cursor-pointer"
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                {/* Form đăng ký */}
                <div className="flex-1 p-16 text-white overflow-y-auto">
                    <h4 className="text-xl font-semibold mb-2">Tạo tài khoản mới</h4>
                    <p className="mb-6 text-sm text-[#FFFFFF99]">
                        Nếu bạn đã có tài khoản,{" "}
                        <span
                            className="text-yellow-300 cursor-pointer"
                            onClick={onSwitch}
                        >
                            đăng nhập
                        </span>
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Tên hiển thị"
                            className="w-full h-[42px] bg-transparent border border-[#ffffff10] rounded-md px-4 text-sm"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full h-[42px] bg-transparent border border-[#ffffff10] rounded-md px-4 text-sm"
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            className="w-full h-[42px] bg-transparent border border-[#ffffff10] rounded-md px-4 text-sm"
                        />
                        <input
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            className="w-full h-[42px] bg-transparent border border-[#ffffff10] rounded-md px-4 text-sm"
                        />

                        <button className="w-full bg-yellow-300 text-black text-sm py-2 rounded-lg font-semibold">
                            Đăng ký
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}
