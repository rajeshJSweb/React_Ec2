import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrolGrow = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });
    const scaleV = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    return { ref, scaleV };
};

export default useScrolGrow;