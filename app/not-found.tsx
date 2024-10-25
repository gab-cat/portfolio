import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/projects/navbar";
import Hero from "@/components/main/hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";
import NotFound from "@/components/sub/not-found";


const Page = () => {
    let section: JSX.Element;
    section = <>
        <section className=" bg-[#030014] flex flex-col">
            <StarsCanvas/>
            <main className="w-full h-full">
                <div className="flex flex-col gap-20">
                    <NotFound />
                </div>
            </main>
        </section>
    </>;
    return section;
}

export default Page