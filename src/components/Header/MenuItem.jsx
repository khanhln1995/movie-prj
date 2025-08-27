import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuItem({
  onPress,
  title,
  icon,
  badge,
}) {
  return (
    <button
      className="px-3 leading-[36px] text-white text-sm font-normal cursor-pointer flex items-center hover:text-yellow-300"
    >

      {badge && (
        <span className="mr-2 text-[10px] font-medium px-[2.5px] py-[2px] bg-yellow-300 rounded-[3px] text-black leading-none ">
          {badge}
        </span>
      )}

      {title}

      {icon && <FontAwesomeIcon icon={icon} className="ml-1" />}
    </button>
  );
}
