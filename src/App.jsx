import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Section from "./components/Content/Section";

const images = [
  {
    isActive: true,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/f105d609e2cc3c8ce1c29f999f42bb9d.webp",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/f105d609e2cc3c8ce1c29f999f42bb9d.webp"
  },
  {
    isActive: false,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/fdf26f9295adea7a951f615d6171cfc2.jpg",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/fdf26f9295adea7a951f615d6171cfc2.jpg"
  },
  {
    isActive: false,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/af2d9ffe736e0e2318656cf41c87e122.webp",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/af2d9ffe736e0e2318656cf41c87e122.webp"
  },
  {
    isActive: false,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/095e08fced63dbf755acfa0c00a6a685.jpg",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/095e08fced63dbf755acfa0c00a6a685.jpg"
  },
  {
    isActive: false,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/631d1f132c05fcf7a5ff095fa5b322b4.jpg",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/631d1f132c05fcf7a5ff095fa5b322b4.jpg"
  },
  {
    isActive: false,
    bgUrl: "https://static.nutscdn.com/vimg/1920-0/931fb23eb19f7496494d3168a38f81eb.jpg",
    thumbUrl: "https://static.nutscdn.com/vimg/150-0/931fb23eb19f7496494d3168a38f81eb.jpg"
  }
]


function App() {
  const [scroll, setScroll] = useState(false)
  const [slides, setSlides] = useState(images)

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
    <div className="h-[200vh]">
      {/* Header */}
      <Header scroll={scroll} />

      {/* Content */}
      <div className="relative h-[88vh]">
        <Section slides={slides} onSlideClick={handleSlideClick} />
      </div>
    </div>
  );
}

export default App;
