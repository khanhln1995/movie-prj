import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";

export default function MenuItem({ title, icon, badge, dropdownItems = [] }) {

  if (dropdownItems.length === 0) {
    return (
      <button className="px-3 leading-[36px] text-white text-sm font-normal cursor-pointer flex items-center hover:text-yellow-300">
        {badge && (
          <span className="mr-2 text-[10px] font-medium px-[2.5px] py-[2px] bg-yellow-300 rounded-[3px] text-black leading-none ">
            {badge}
          </span>
        )}
        {title}
        {icon && <FontAwesomeIcon icon={icon} className="ml-1" />}
      </button>
    )
  }

  return (
    <Tippy
      interactive
      trigger="click"
      hideOnClick={true}
      placement="bottom-start"
      render={(attrs) => (
        <div
          className={` bg-black/90 text-white rounded-lg p-2 shadow-lg overflow-y-auto
            ${dropdownItems.length > 20 ? "w-[576px] h-[608px] grid grid-cols-4 gap-x-6 gap-y-2" : "w-[160px] flex flex-col gap-1"} 
            `}
          tabIndex="-1"
          {...attrs}
        >
          {dropdownItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="mt-2 mb-0.5 text-[13px] py-1 px-2 rounded transition-colors duration-200 
                         hover:text-yellow-300 hover:bg-white/10 overflow-hidden "
            >
              {item}
            </a>
          ))}
        </div>
      )}
    >
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
    </Tippy>
  );
}
