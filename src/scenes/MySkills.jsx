import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* Header and image section */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount:0.5 }}
                    transition={{ duration:0.5 }}
                    variants={{
                        hidden:{ opacity: 0, x:-50 },
                        visible:{ opacity: 1, x:0 }
                    }}

                >
                    <p className="font-playfair font-semibold text-4xl mb-5 ">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus explicabo quibusdam quae magni!
                    </p>
                </motion.div>
                
                <div className="mt-16 md:mt-0">
                    { isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                            alt="skills"
                            className="z-10"
                            src="../assets/skills-image.png"
                            />
                        </div>

                    ) : (
                        <img 
                            alt="profile"
                            className="z-10"
                            src="../assets/skills-image.png"
                        />
                    )}

                </div>

            </div>

            {/* Skills */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* Experiences */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount:0.5 }}
                    transition={{ duration:0.5 }}
                    variants={{
                        hidden:{ opacity: 0, y:50 },
                        visible:{ opacity: 1, y:0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10 relative"> {/* Pastikan teks tetap di atas */}
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                        </div>
                        <div className="absolute right-0 top-0 w-1/2 md:w-3/4 h-32 bg-blue before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-blue before:-z-1" />
                    </div>

                    <p className="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, rem labore accusamus iusto iure porro, fuga accusantium alias reprehenderit cumque numquam?
                    </p>
                </motion.div>

                {/* Innovative*/}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount:0.5 }}
                    transition={{ delay:0.2, duration:0.5 }}
                    variants={{
                        hidden:{ opacity: 0, y:50 },
                        visible:{ opacity: 1, y:0 },
                    }}
                >
                    <div className="relative h-32 ">
                        <div className="z-10 relative">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Innovative</p>
                        </div>
                        <div className="absolute right-0 top-0 w-1/2 md:w-3/4 h-32 bg-red before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-red before:-z-1" />
                    </div>
                    <p className="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, rem labore accusamus iusto iure porro, fuga accusantium alias reprehenderit cumque numquam?
                    </p>
                </motion.div>

                {/* Imaginative*/}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount:0.5 }}
                    transition={{ delay:0.4, duration:0.5 }}
                    variants={{
                        hidden:{ opacity: 0, y:50 },
                        visible:{ opacity: 1, y:0 },
                    }}
                >
                    <div className="relative h-32 ">
                        <div className="z-10 relative">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Imaginative</p>
                        </div>
                        <div className="absolute right-0 top-0 w-1/2 md:w-3/4 h-32 bg-yellow before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow before:-z-1" />
                    </div>
                    <p className="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, rem labore accusamus iusto iure porro, fuga accusantium alias reprehenderit cumque numquam?
                    </p>
                </motion.div>

            </div>

        </section>

    );

};

export default MySkills;