import { LampDemo } from "./ui/lamp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      name: "GitHub",
      icon: <GitHubIcon />,
      link: "https://github.com/deepakbaligar-83",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/deepakbaligar83/",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/deepakbaligar_83/",
    },
  ];

  return (
    <footer
      className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 text-white"
      id="contact"
    >
      <div className="flex flex-col items-center space-y-0.5 md:space-y-2"> {/* Reduced space */}
        <LampDemo />

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=deepakbaligar83@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="-mt-[200px] mb-4" /* Further reduced negative margin */
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        <p className="text-sm sm:text-base text-center max-w-lg mx-auto">
          Feel free to reach out to me for job opportunities, collaborations, or
          any inquiries. I look forward to connecting with you!
        </p>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full mt-6 gap-4 relative">
          {/* Copyright Section */}
          <p className="text-sm sm:text-sm sm:mt-6 md:text-base font-light text-center md:text-left">
            © 2025 Deepak Baligar
          </p>

          {/* Social Media Section */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0 ">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-gray-600 transition-colors duration-300 hover:bg-white hover:text-black"
              >
                {info.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
