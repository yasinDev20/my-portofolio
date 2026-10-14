import { SlLocationPin } from "react-icons/sl";
import { Badge } from "./ui/badge";
import { MdSchool } from "react-icons/md";
import { FaCode, FaRegCheckCircle } from "react-icons/fa";
import { LuBird } from "react-icons/lu";

function About() {
    return (
        <div className="flex flex-col gap-10 px-6 py-16 sm:px-10 md:px-12 md:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-20">

            {/* intro */}
            <div className="flex w-full max-w-2xl flex-col gap-6">

                <h2 className="text-3xl font-semibold sm:text-4xl">
                    Nice to meet you!
                </h2>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    I am a developer focused on building practical, elegant, and maintainable mobile and web applications using Flutter, React, and Laravel.
                    I enjoy writing clean, well-structured code, working with state management solutions like Flutter BLoC,
                    and integrating modern backends to deliver reliable and user-friendly applications.
                </p>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    Currently, I am expanding my boundaries with backends
                    like Supabase and SQL databases, working on contributions
                    to real-world impact apps.
                </p>

                {/* information badges */}
                <div className="flex flex-wrap items-center gap-3">

                    <Badge variant="outline" className="gap-1.5 px-3 py-1.5">
                        <SlLocationPin />
                        Medan, Indonesia
                    </Badge>


                    <Badge
                        variant="outline"
                        className="gap-1.5 px-3 py-1.5"
                    >
                        <MdSchool className="shrink-0" />
                        Bachelor of Informatics Engineering (2020 - 2024)
                    </Badge>

                    <Badge variant="outline" className="gap-1.5 px-3 py-1.5">
                        <FaCode />
                        Always Learning
                    </Badge>

                </div>
            </div>

            {/* right: my focus */}
            <div className="w-full max-w-md shrink-0 rounded-xl bg-[#F0FDF4] p-5 shadow-sm dark:bg-green-950 sm:p-8">

                {/* title */}
                <div className="flex items-center gap-4">

                    <div className="flex size-16 shrink-0 items-center justify-center rounded-lg border-2 border-foreground sm:size-20">
                        <LuBird className="size-7 text-primary dark:text-green-300" />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-green-950 dark:text-green-100">
                            My Focus
                        </h3>

                        <p className="text-sm text-green-800 dark:text-green-200">
                            Guiding Principles
                        </p>
                    </div>

                </div>

                {/* list of focus */}
                <div className="mt-6 flex flex-col gap-4">

                    {focusItem('Mobile Application (Flutter)')}
                    {focusItem('Web Application (Laravel & React)')}
                    {focusItem('Clean Architecture')}
                    {focusItem('Supabase & PostgreSQL')}
                    {focusItem('Problem Solving & Optimization')}

                </div>
            </div>

        </div>
    );

    function focusItem(focus: string) {
        return <div className="flex items-start gap-3">
            <FaRegCheckCircle className="mt-1 size-4 shrink-0 text-primary dark:text-green-300" />
            <p className="text-sm leading-6 text-green-950 dark:text-green-100 sm:text-base">
                {focus}
            </p>
        </div>;
    }
}

export { About };
