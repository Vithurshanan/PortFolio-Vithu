import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const SocialsImage = [
  { icons: <FaGithub />, Path: "https://github.com/Vithurshanan" },
  { icons: <FaLinkedinIn />, Path: "https://www.linkedin.com/in/vithurshanan/" },
  { icons: <FaYoutube />, Path: "https://www.youtube.com" },
  { icons: <FaTwitter />, Path: "https://twitter.com" },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {SocialsImage.map((item, index) => {
        return (
          <Link
            href={item.Path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={iconsStyles}
          >
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
