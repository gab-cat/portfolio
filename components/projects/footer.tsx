import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function ProjFooter() {

    return (
        <main className=" border-t">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                        <div key={item} className="px-5 py-2">
                            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-base text-muted-foreground hover:text-foreground">
                                {item}
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    {[
                        { name: 'GitHub', href: '#', icon: Github },
                        { name: 'LinkedIn', href: '#', icon: Linkedin },
                        { name: 'Twitter', href: '#', icon: Twitter },
                        { name: 'Email', href: 'mailto:your.email@example.com', icon: Mail },
                    ].map((item) => (
                        <a key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="mt-8 text-center text-base text-muted-foreground">
                    &copy; 2024 YourName. All rights reserved.
                </p>
            </div>
        </main>
    )
}