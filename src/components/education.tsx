import { Badge } from "./ui/badge";
import { MdSchool } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";

const education = [
    {
        degree: "Bachelor of Informatics Engineering",
        institution: "Your University Name",
        period: "2020 - 2024",
        description:
            "Studied software development, programming, database management, and information systems.",
        achievements: [
            "Built a foundation in software development and programming.",
            "Learned database design and application development.",
            "Completed studies in Informatics Engineering.",
        ],
    },
];

function Education() {
    return (
        <>
            {/* heading */}
            <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-12">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                    My{" "}
                    <span className="text-primary dark:text-green-200">
                        Education
                    </span>
                </h2>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    My academic background and the foundation that supports
                    my journey in software development.
                </p>
            </div>

            {/* education cards */}
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5">
                {education.map((item) => (
                    <article
                        key={`${item.institution}-${item.degree}`}
                        className="flex min-w-0 flex-col gap-5 rounded-xl border bg-card p-5 transition-shadow hover:shadow-md sm:flex-row sm:gap-6 sm:p-7"
                    >
                        {/* icon */}
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-primary dark:bg-green-950 dark:text-green-200 sm:size-16">
                            <FaGraduationCap className="size-7 sm:size-8" />
                        </div>

                        {/* content */}
                        <div className="min-w-0 flex-1">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div className="min-w-0">
                                    <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                                        {item.degree}
                                    </h3>

                                    <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground sm:text-base">
                                        <MdSchool className="mt-0.5 size-5 shrink-0 text-primary dark:text-green-200" />
                                        <span>{item.institution}</span>
                                    </p>
                                </div>

                                <Badge
                                    variant="outline"
                                    className="w-fit shrink-0"
                                >
                                    {item.period}
                                </Badge>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                                {item.description}
                            </p>

                            {/* academic highlights */}
                            <ul className="mt-4 flex flex-col gap-3">
                                {item.achievements.map((achievement) => (
                                    <li
                                        key={achievement}
                                        className="flex items-start gap-3 text-sm leading-6 sm:text-base"
                                    >
                                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary dark:bg-green-200" />

                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
}

export { Education };
