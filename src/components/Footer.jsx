import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f5deb3] text-[#301934] py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Madhavan All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
            href="https://github.com/madhavansenthil02/"
            className="hover:text-[#fe5617]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/madhavan-s-9a6412285/"
            className="hover:text-[#fe5617]"
          >
            <FaLinkedin size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
