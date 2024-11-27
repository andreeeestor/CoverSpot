import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
    return (
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-[80vh] items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };
  
  const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    );
  };
  
  export default HorizontalScrollCarousel;
  
  const cards = [
    {
      url: "/imgs/abstract/1.jpg",
      title: "Bigroom",
      description: "02 vagas",
      id: 1,
    },
    {
      url: "/imgs/abstract/2.jpg",
      title: "Taqueria",
      description: "02 vagas",
      id: 2,
    },
    {
      url: "/imgs/abstract/3.jpg",
      title: "Bar do Cidinho",
      description: "02 vagas",
      id: 3,
    },
  ];