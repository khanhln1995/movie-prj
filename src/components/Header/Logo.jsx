import logo from "../../assets/img/logo.svg"

function Logo() {
    return (
        <img
            src={logo}
            alt="logo"
            className="w-[154.55px] h-[46px] object-fill cursor-pointer"
        />
    );
}

export default Logo;