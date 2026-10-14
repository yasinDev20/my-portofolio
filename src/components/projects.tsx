import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
    {
        title: "Asset Management",
        description:
            "A cross-platform application for managing assets, tracking equipment information, and organizing service schedules.",
        image: "/images/asset-management.png",
        technologies: [
            "Flutter",
            "Dart",
            "Supabase",
            "BLoC",
        ],
        github: "https://github.com/your-username/your-repository",
        demo: "",
    },
    {
        title: "Project Two",
        description:
            "A project that demonstrates my skills in application development, clean code, and responsive user interfaces.",
        image: "/images/project-two.png",
        technologies: [
            "Flutter",
            "Dart",
            "SQLite",
        ],
        github: "",
        demo: "",
    },
    {
        title: "Portfolio Website",
        description:
            "A personal portfolio website to showcase my skills, projects, and experience as a developer.",
        image: "/images/portfolio.png",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
        ],
        github: "",
        demo: "",
    },
];

function Projects() {
    return (
        <>

            {/* heading */}
            <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-12">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                    My{" "}
                    <span className="text-primary dark:text-green-200">
                        Projects
                    </span>
                </h2>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    A selection of projects that showcase my skills,
                    experience, and passion for building useful applications.
                </p>
            </div>

            {/* project grid */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="flex min-w-0 flex-col overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                        {/* project image */}
                        <div className="aspect-video overflow-hidden bg-muted">
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                loading="lazy"
                                className="size-full object-cover"
                            />
                        </div>

                        {/* project content */}
                        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">

                            <h3 className="text-xl font-semibold">
                                {project.title}
                            </h3>

                            <p className="text-sm leading-6 text-muted-foreground">
                                {project.description}
                            </p>

                            {/* technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <Badge
                                        key={technology}
                                        variant="secondary"
                                    >
                                        {technology}
                                    </Badge>
                                ))}
                            </div>

                            {/* actions */}
                            <div className="mt-auto flex flex-wrap gap-2 pt-2">
                                {project.github && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        render={
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                            />
                                        }
                                    >
                                        <FaGithub />
                                        GitHub
                                    </Button>
                                )}

                                {project.demo && (
                                    <Button
                                        size="sm"
                                        render={
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                            />
                                        }
                                    >
                                        <FaArrowUpRightFromSquare />
                                        Live Demo
                                    </Button>
                                )}
                            </div>

                        </div>
                    </article>
                ))}

            </div>
        </>
    );
}

export { Projects };
