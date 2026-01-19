import Marquee from "react-fast-marquee";

const images = [ 
  { src: "/IMAGES/image01.jpeg", alt: "image 1" },
  { src: "/IMAGES/image02.jpeg", alt: "image 2" },
  { src: "/IMAGES/image03.jpeg", alt: "image 3" },
  { src: "/IMAGES/image04.jpeg", alt: "image 4" },
  { src: "/IMAGES/fig3.png", alt: "image 5" },
];


function ImageSlider() {
  return (
    <Marquee
    className="border-4 border-sky-600"
      gradient={false}
      speed={100}
      pauseOnHover={true}
    >
      
      {images.map((image, index) => (
        <img
        className="w-95 h-80 mx-4 object-cover rounded-lg border-4 border-sky-200"
          key={index}
          src={image.src}
          alt={image.alt}
          
        />
        
      ))}
    </Marquee>
  
  );
  
}

export default ImageSlider;