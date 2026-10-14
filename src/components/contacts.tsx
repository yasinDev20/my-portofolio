import { Button } from "./ui/button";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa6";
import {
    MdOutlineEmail,
    MdOutlineLocationOn,
} from "react-icons/md";

const contacts = [
    {
        title: "Email",
        value: "your.email@example.com",
        icon: MdOutlineEmail,
        href: "mailto:your.email@example.com",
    },
    {
        title: "Location",
        value: "Medan, Indonesia",
        icon: MdOutlineLocationOn,
        href: "",
    },
];

function Contacts() {
    return (
        <>
            {/* heading */}
            <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-12">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                    Get In{" "}
                    <span className="text-primary dark:text-green-200">
                        Touch
                    </span>
                </h2>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    Have a project in mind or an opportunity to discuss?
                    Feel free to reach out. I would love to hear from you.
                </p>
            </div>

            {/* contact content */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

                {/* left: introduction */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-2xl font-semibold sm:text-3xl">
                            Let's work together
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                            I am open to opportunities as a Junior Flutter
                            Developer, collaborations, and interesting
                            projects. If you think we could work together,
                            feel free to contact me.
                        </p>
                    </div>

                    {/* social links */}
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            render={
                                <a
                                    href="https://github.com/your-username"
                                    target="_blank"
                                    rel="noreferrer"
                                />
                            }
                        >
                            <FaGithub />
                            GitHub
                        </Button>

                        <Button
                            variant="outline"
                            render={
                                <a
                                    href="https://linkedin.com/in/your-username"
                                    target="_blank"
                                    rel="noreferrer"
                                />
                            }
                        >
                            <FaLinkedin />
                            LinkedIn
                        </Button>
                    </div>
                </div>

                {/* right: contact information */}
                <div className="flex flex-col gap-4 rounded-xl border bg-card p-5 sm:p-7">

                    <h3 className="text-xl font-semibold">
                        Contact Information
                    </h3>

                    {contacts.map((contact) => {
                        const Icon = contact.icon;

                        const content = (
                            <>
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-green-50 dark:bg-green-950">
                                    <Icon className="size-5 text-primary dark:text-green-200" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-sm text-muted-foreground">
                                        {contact.title}
                                    </p>

                                    <p className="break-words text-sm font-medium sm:text-base">
                                        {contact.value}
                                    </p>
                                </div>
                            </>
                        );

                        return (
                            <div
                                key={contact.title}
                                className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted/50"
                            >
                                {contact.href ? (
                                    <a
                                        href={contact.href}
                                        className="flex min-w-0 flex-1 items-center gap-4"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    content
                                )}
                            </div>
                        );
                    })}

                    {/* email action */}
                    <Button
                        className="mt-2 w-full"
                        render={
                            <a href="mailto:your.email@example.com" />
                        }
                    >
                        Send me an email
                        <FaArrowRight />
                    </Button>

                </div>
            </div>
        </>
    );
}

export { Contacts as Contact };
