import { Item } from "@radix-ui/react-select"
import { icons } from "lucide-react"
import Link from "next/link"
import { FaGithub , FaLinkedinIn , FaYoutube , FaTwitter} from "react-icons/fa"

const SocialsImage = [
    {icons: <FaGithub /> , Path:"https://github.com/Vithurshanan"},
    {icons: <FaLinkedinIn /> , Path:"https://www.linkedin.com/in/vithurshanan/"},
    {icons: <FaYoutube /> , Path:""},
    {icons: <FaTwitter /> , Path:""},
]

const Socials = ( {containerStyles , iconsStyles}) => {

  return (
    <div className={containerStyles}>
      {SocialsImage.map((item , index ) => {
        return (
            <Link href={item.Path} key={index} className={iconsStyles}> 
            {item.icons}
            </Link>
        )
      })}
    </div>
  )
}

export default Socials
