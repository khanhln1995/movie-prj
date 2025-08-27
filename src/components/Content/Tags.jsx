function Tags() {
    const tags = ["Hành Động", "Chiếu Rạp", "DC", "Siêu Anh Hùng", "Khoa Học", "Kỳ Ảo"];

    return (
        <div className="flex items-center gap-[9.6px]">
            {tags.map((tag, i) => (
                <a
                    key={i}
                    className="hover:text-yellow-300 bg-[#ffffff10] h-[26px] px-[0.4rem] text-white inline-flex rounded-[0.33rem] items-center text-[12px] cursor-pointer no-underline"
                >
                    {tag}
                </a>
            ))}
        </div>
    );
}

export default Tags;