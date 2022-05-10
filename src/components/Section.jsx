import { Photo } from "../ui/Photo.jsx";
import { Description } from "../ui/Description.jsx";
const Section = () => {
    return(
        <>
            <section className="flex flex-row items-center justify-evenly bg-cyan-300 w-full p-3 flex-wrap">
                <Photo></Photo>
                <Description title="Who I am?" text="
                1 year+ of experience working with blockchain technologies, leading the operations, design, development, analysis, implementation, and support of distributed blockchain networks and applications. 

                My experience working with startups, leading engineering teams with agile methodologies, and working in different blockchain layers and node providers keep me updated on the Defi ecosystem, Dapps, crypto exchanges everything related to web 3.0.
                
                I'm fluent in English and Spanish." gmail="nanualexandraramirez@gmail.com">

                </Description>
            </section>
        </>
    )
}

export default Section;