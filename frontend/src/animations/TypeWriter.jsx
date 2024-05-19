import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({ words, cursorClassName }) => {
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const renderWords = () => {
        return (
            <>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span 
                                className="text-[6rem]"
                                key={`char-${index}`}>
                                    {char}
                                </span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <div className={` text-center flex items-center justify-center `}>
            <motion.div
            className="inline-block overflow-visible"
            initial={{ width: "0%" }}
            whileInView={{ width: "fit-content" }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 1,
            }}>
                <div
                className="overflow-hidden text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pb-1 sm:pb-2 lg:pb-4"
                style={{ whiteSpace: "nowrap" }}>
                    {renderWords()}{" "}
                </div>{" "}
            </motion.div>
        
            <motion.span
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className={`inline-block rounded-sm w-[2px] sm:w-[4px] h-8 sm:h-10 md:h-[2.9rem] lg:h-[3.2rem] xl:h-[4.7rem] bg-blue-400 mb-1 sm:mb-2 lg:mb-4 ${cursorClassName}`}
            ></motion.span>
        </div>         
    );
};