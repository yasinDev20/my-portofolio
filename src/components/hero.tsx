import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import { MdOutlineEmail } from "react-icons/md";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import profile from "../assets/profilcrop.jpg";


function Hero() {
    return (
        <>
            {/* intro card */}
            <div className="flex w-full max-w-xl flex-col items-center gap-6 text-center md:items-start md:text-left">

                <Badge className="dark:bg-[#F0FDF4] dark:text-green-800">
                    Mobile & Web Developer
                </Badge>

                <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                    Ahmad{" "}
                    <span className="text-primary dark:text-green-200">
                        Yasin
                    </span>
                </h1>

                <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
                    I build beautiful, robust, and highly maintainable applications using Flutter and Dart for cross-platform mobile development,
                    as well as React and Laravel for web development. Focused on clean code, scalable architecture, and delightful user experiences.
                </p>

                {/* social media */}
                <div className="flex gap-3">
                    <Button variant="ghost" size="icon" aria-label="LinkedIn">
                        <FaLinkedin className="size-5" />
                    </Button>

                    <Button variant="ghost" size="icon" aria-label="GitHub">
                        <FaGithub className="size-5" />
                    </Button>

                    <Button variant="ghost" size="icon" aria-label="Email">
                        <MdOutlineEmail className="size-5" />
                    </Button>
                </div>
            </div>

            {/* profile */}
            <div className="relative shrink-0">
                <Avatar className="size-40 border-4 border-background shadow-lg sm:size-48 md:size-52 lg:size-64">
                    <AvatarImage
                        src={profile}
                        alt="Ahmad Yasin"
                        className="object-cover"
                    />
                    <AvatarFallback>AY</AvatarFallback>
                </Avatar>

                <div className="absolute -bottom-3 -right-3 rounded-xl border bg-background px-4 py-2 text-sm font-medium shadow-md sm:-right-5">
                    Hello 👋
                </div>
            </div>

        </>


    );
}

export { Hero };
