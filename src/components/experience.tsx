import { Badge } from "./ui/badge";
import { FaBriefcase } from "react-icons/fa6";

const experiences = [
    {
        role: "HRD Intern",
        company: "Bank Riau Kepri Syariah",
        period: "Internship",
        location: "Indonesia",
        description:
            "Gained professional experience in Human Resources and organizational administration while developing communication, collaboration, and problem-solving skills.",
        responsibilities: [
            "Supported HR-related administrative activities.",
            "Assisted with document organization and data management.",
            "Developed communication and teamwork skills in a professional environment.",
        ],
        technologies: [],
    },
];

function Experience() {
    return (
        <>
            {/* heading */}
            <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-12">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                    My{" "}
                    <span className="text-primary dark:text-green-200">
                        Experience
                    </span>
                </h2>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    My professional journey, experiences, and continuous
                    growth as I develop my skills and career.
                </p>
            </div>

            {/* timeline */}
            <div className="mx-auto max-w-3xl">
                {experiences.map((experience, index) => (
                    <div
                        key={`${experience.company}-${experience.role}`}
                        className="relative flex gap-4 sm:gap-6"
                    >
                        {/* timeline indicator */}
                        <div className="flex flex-col items-center">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border bg-green-50 text-primary dark:bg-green-950 dark:text-green-200">
                                <FaBriefcase className="size-4" />
                            </div>

                            {index !== experiences.length - 1 && (
                                <div className="mt-3 w-px flex-1 bg-border" />
                            )}
                        </div>

                        {/* experience card */}
                        <article className="mb-8 min-w-0 flex-1 rounded-xl border bg-card p-5 transition-shadow hover:shadow-md sm:p-7">

                            {/* role and period */}
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div className="min-w-0">
                                    <h3 className="text-lg font-semibold sm:text-xl">
                                        {experience.role}
                                    </h3>

                                    <p className="mt-1 text-sm font-medium text-primary dark:text-green-200">
                                        {experience.company}
                                    </p>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {experience.location}
                                    </p>
                                </div>

                                <Badge
                                    variant="outline"
                                    className="w-fit shrink-0"
                                >
                                    {experience.period}
                                </Badge>
                            </div>

                            {/* description */}
                            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                                {experience.description}
                            </p>

                            {/* responsibilities */}
                            <ul className="mt-4 flex flex-col gap-3">
                                {experience.responsibilities.map(
                                    (responsibility) => (
                                        <li
                                            key={responsibility}
                                            className="flex items-start gap-3 text-sm leading-6 sm:text-base"
                                        >
                                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary dark:bg-green-200" />

                                            <span>{responsibility}</span>
                                        </li>
                                    ),
                                )}
                            </ul>

                        </article>
                    </div>
                ))}
            </div>
        </>
    );
}

export { Experience };
