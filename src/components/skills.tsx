import { FaCube, FaFigma, FaLayerGroup } from "react-icons/fa";
import { FaFlutter, FaGitAlt, FaGithub, FaLaravel } from "react-icons/fa6";
import {
    SiDart,
    SiSupabase,
    SiPostgresql,
    SiFirebase,
    SiSqlite,
    SiTypescript,
    SiReact,
    SiJavascript,
    SiTailwindcss,
} from "react-icons/si";

const skills = [
    {
        name: "Flutter",
        description: "Cross-platform mobile development",
        icon: FaFlutter,
    },
    {
        name: "Dart",
        description: "Mobile application programming",
        icon: SiDart,
    },
    {
        name: "Clean Architecture",
        description: "Scalable and maintainable app architecture",
        icon: FaLayerGroup,
    },
    {
        name: "Flutter BLoC",
        description: "Reactive state management",
        icon: FaCube,
    },
    {
        name: "React",
        description: "Interactive web interfaces",
        icon: SiReact,
    },
    {
        name: "TypeScript",
        description: "Type-safe JavaScript development",
        icon: SiTypescript,
    },
    {
        name: "JavaScript",
        description: "Web application programming",
        icon: SiJavascript,
    },
    {
        name: "Laravel",
        description: "Backend and web application development",
        icon: FaLaravel,
    },
    {
        name: "Tailwind CSS",
        description: "Responsive and modern UI styling",
        icon: SiTailwindcss,
    },
    {
        name: "Supabase",
        description: "Backend services and authentication",
        icon: SiSupabase,
    },
    {
        name: "PostgreSQL",
        description: "Relational database management",
        icon: SiPostgresql,
    },
    {
        name: "Firebase",
        description: "Backend services and cloud integration",
        icon: SiFirebase,
    },
    {
        name: "SQLite",
        description: "Local database storage",
        icon: SiSqlite,
    },
    {
        name: "Git",
        description: "Source code version control",
        icon: FaGitAlt,
    },
    {
        name: "GitHub",
        description: "Code hosting and collaboration",
        icon: FaGithub,
    },
    {
        name: "Figma",
        description: "UI/UX design and prototyping",
        icon: FaFigma,
    }
];

function Skills() {
    return (
        <>
            {/* heading */}
            <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-12">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                    <span className="text-primary dark:text-green-200">
                        Skills
                    </span>{" "}
                    & Technologies
                </h2>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    Technologies and tools I use to build reliable,
                    maintainable, and user-friendly mobile and web applications.
                </p>
            </div>

            {/* skills grid */}
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
                {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                        <div
                            key={skill.name}
                            className="flex min-w-0 flex-col items-center gap-3 rounded-xl border bg-card p-4 text-center transition-colors hover:border-primary/50 sm:p-6"
                        >
                            <div className="flex size-12 items-center justify-center rounded-lg bg-green-50 dark:bg-green-950 sm:size-14">
                                <Icon className="size-6 text-primary dark:text-green-200 sm:size-7" />
                            </div>

                            <h3 className="text-sm font-semibold sm:text-base">
                                {skill.name}
                            </h3>

                            <p className="text-xs leading-5 text-muted-foreground sm:text-sm">
                                {skill.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export { Skills };