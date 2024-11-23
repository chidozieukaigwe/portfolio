"use client"

import Link from "next/link"
import { RiLinkedinFill, RiGithubFill, RiInstallFill} from "react-icons/ri"


const icons = [
    {
        path:"https://www.linkedin.com/in/chidoukaigwe/",
        name: <RiLinkedinFill />,
    },
    {
        path:"https://github.com/chidozieukaigwe",
        name: <RiGithubFill />,
    },
   
]

export default function Socials({containerStyles, iconStyles}) {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => (
            <Link href={icon.path} key={index} target="_blank">
                <div className={`${iconStyles}`}>{icon.name}</div>
            </Link>
        ))}
    </div>
  )
}
