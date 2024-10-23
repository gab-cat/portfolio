import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Hero from "@/components/main/hero";
import Footer from "@/components/main/Footer";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/projects/navbar";


export default function Home() {
    const section = <>
        <section className=" bg-[#030014] flex flex-col">
            <StarsCanvas/>
            <Navbar/>
            <main className="w-full h-full">
                <div className="flex flex-col gap-20">
                    <Hero/>
                    <Skills/>
                    <Encryption/>
                    <Projects/>
                </div>
            </main>
            <Footer/>
        </section>
    </>;
    return section;
}
