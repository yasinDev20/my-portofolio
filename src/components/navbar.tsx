import { Button } from '#components/ui/button'
import { useEffect, useRef, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
]

function Navbar() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })

    const [activeSection, setActiveSection] = useState('home')

    const isProgrammaticScroll = useRef(false)
    const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    useEffect(() => {
        const updateActiveSection = () => {
            const scrollPosition =
                window.scrollY + window.innerHeight * 0.35

            const isAtBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2

            if (isAtBottom) {
                setActiveSection(navItems[navItems.length - 1].id)
                return
            }

            let currentSection = navItems[0].id

            for (const item of navItems) {
                const section = document.getElementById(item.id)

                if (
                    section &&
                    section.getBoundingClientRect().top +
                        window.scrollY <=
                        scrollPosition
                ) {
                    currentSection = item.id
                }
            }

            setActiveSection(currentSection)
        }

        const finishProgrammaticScroll = () => {
            if (scrollTimeout.current !== null) {
                clearTimeout(scrollTimeout.current)
                scrollTimeout.current = null
            }

            isProgrammaticScroll.current = false
            updateActiveSection()
        }

        const handleScroll = () => {
            if (isProgrammaticScroll.current) {
                if (scrollTimeout.current !== null) {
                    clearTimeout(scrollTimeout.current)
                }

                // Fallback jika event scrollend tidak tersedia.
                scrollTimeout.current = setTimeout(
                    finishProgrammaticScroll,
                    150
                )

                return
            }

            updateActiveSection()
        }

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        })

        window.addEventListener(
            'scrollend',
            finishProgrammaticScroll
        )

        updateActiveSection()

        return () => {
            window.removeEventListener('scroll', handleScroll)

            window.removeEventListener(
                'scrollend',
                finishProgrammaticScroll
            )

            if (scrollTimeout.current !== null) {
                clearTimeout(scrollTimeout.current)
            }
        }
    }, [])

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)

        if (!section) return

        if (scrollTimeout.current !== null) {
            clearTimeout(scrollTimeout.current)
            scrollTimeout.current = null
        }

        setActiveSection(id)

        const distance = Math.abs(
            section.getBoundingClientRect().top
        )

        if (distance <= 2) {
            isProgrammaticScroll.current = false
            return
        }

        isProgrammaticScroll.current = true

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    const toggleDarkMode = () => {
        setDark((prev) => !prev)
    }

    const getNavVariant = (id: string) => {
        return activeSection === id ? 'default' : 'ghost'
    }

    const renderNavItems = () =>
        navItems.map((item) => (
            <Button
                key={item.id}
                variant={getNavVariant(item.id)}
                onClick={() => scrollToSection(item.id)}
                aria-current={
                    activeSection === item.id
                        ? 'location'
                        : undefined
                }
            >
                {item.label}
            </Button>
        ))

    return (
        <nav className="flex items-center justify-between">
            {/* Name */}
            <p className="font-bold md:text-xl">
                Ahmad Yasin
            </p>

            {/* Desktop navigation */}
            <div className="hidden gap-2 lg:flex">
                {renderNavItems()}
            </div>

            {/* Desktop actions */}
            <div className="hidden gap-4 lg:flex">
                <Button
                    variant="ghost"
                    size="icon-lg"
                    onClick={toggleDarkMode}
                    aria-label={
                        dark
                            ? 'Switch to light mode'
                            : 'Switch to dark mode'
                    }
                >
                    {dark ? <FaSun /> : <FaMoon />}
                </Button>

                <Button className="dark:text-foreground">
                    Download CV
                </Button>
            </div>

            {/* Mobile navigation */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger
                        render={
                            <Button
                                variant="ghost"
                                aria-label="Open navigation menu"
                            >
                                <FiMenu />
                            </Button>
                        }
                    />

                    <SheetContent>
                        <nav className="flex flex-col items-start gap-4 p-2">
                            {renderNavItems()}

                            <Button
                                variant="ghost"
                                onClick={toggleDarkMode}
                            >
                                {dark ? <FaSun /> : <FaMoon />}
                                {dark ? 'Light mode' : 'Dark mode'}
                            </Button>

                            <Button className="dark:text-foreground">
                                Download CV
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export { Navbar }
