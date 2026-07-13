import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const HoverExpand_001 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string; title?: string; description?: string; icon?: React.ReactNode }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
      className={cn("relative w-full max-w-7xl px-5 mx-auto", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-2">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-[2rem] group"
              initial={{ width: "5rem", height: "36rem" }}
              animate={{
                width: activeImage === index ? "48rem" : "5rem",
                height: "36rem",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
                  />
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {activeImage !== index && (
                   <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/40 z-10 transition-colors"
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="absolute flex h-full w-full flex-col items-start justify-end p-10 lg:p-14 z-20"
                  >
                    {image.icon && (
                      <div className="w-16 h-16 rounded-full bg-[var(--color-burnt-rust)] flex items-center justify-center mb-8 shadow-xl border border-white/20 text-white">
                        {image.icon}
                      </div>
                    )}
                    <h3 className="text-left text-3xl lg:text-4xl font-bold text-white mb-3 font-display drop-shadow-md">
                      {image.title}
                    </h3>
                    <p className="text-left text-white/90 text-lg leading-relaxed max-w-md drop-shadow">
                       {image.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Non-active state icon/text */}
              <AnimatePresence>
                {activeImage !== index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-end pb-8 z-20"
                  >
                    {image.icon && (
                      <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/20 text-white">
                        {image.icon}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
