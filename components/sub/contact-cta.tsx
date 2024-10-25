import {Button} from "@/components/ui/button";
import {ArrowRight, SendHorizontal} from "lucide-react";
import React from "react";


const ContactCta = () => {
    return (
        <section className="bg-white dark:bg-gray-900 h-[50vh] mb-32 flex justify-center items-center ">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    Try something really different right now.
                </h2>

                <p className="block max-w-4xl mt-4 text-gray-500 dark:text-gray-300">
                    Whether you have a groundbreaking project in mind or need expert help enhancing your existing
                    platform, I&apos;m here to make it happen. Reach out now to get a free, no-obligation quote tailored
                    to your unique needs.
                </p>
                <p className="block max-w-4xl mt-4 text-gray-500 dark:text-gray-300">
                    Have questions or want to know more about my experience? Drop me a message to receive a copy of my CV—let’s connect and explore how I can support your success.
                </p>
                <div className="mt-6 space-x-4">
                    <Button size="lg" asChild>
                        <a href="/quote" className="flex items-center justify-center">
                            Get a Free Quote <ArrowRight className="ml-2 h-4 w-4"/>
                        </a>
                    </Button>
                    <Button size="lg" className="bg-blue-700" asChild>
                        <a href="#contact-section" className="flex items-center justify-center">
                            Send me a message <SendHorizontal className="ml-2 h-4 w-4"/>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
)
}

export default ContactCta;