"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SectionMeeting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full py-12 bgheader" ref={ref}>
      <article className="m-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl text-gray-800 m-8"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          •Quem Somos?
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-800 m-4 px-12"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          A Delícias da Carol nasceu do sonho de uma jovem apaixonada pela
          confeitaria, inspirada pelas memórias afetivas dos sabores da
          infância. O que começou com a venda de docinhos e empadas na escola,
          logo se transformou em um negócio que conquistou o paladar da
          vizinhança. Acreditando no poder dos seus sonhos e na qualidade de
          seus produtos, a Delícias da Carol trilhou um caminho de sucesso,
          celebrando cada conquista como o início de uma nova etapa.
        </motion.p>

        <motion.h1
          className="text-5xl text-gray-800 m-8"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        >
          •Em que acreditamos?
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-800 m-4 px-12"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          Acreditamos na importância de receitas tradicionais, com um toque de
          inovação, buscando assim acompanhar as tendências do mercado, sem
          perder a essência da nossa marca. Acreditamos que cada doce conta
          uma história, por isso a importância da qualidade é sempre levada em
          conta desde a produção ao atendimento.
        </motion.p>

        <span className="text-2xl text-white flex justify-center pt-[30px]">
          ▼
        </span>
      </article>
    </section>
  );
}
