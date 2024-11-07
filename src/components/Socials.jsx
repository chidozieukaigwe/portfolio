"use client"

import Link from "next/link"
import { RiLinkedinFill, RiGithubFill, RiInstallFill} from "react-icons/ri"


const icons = [
    {
        path:"/",
        name: <RiLinkedinFill />,
    },
    {
        path:"/",
        name: <RiGithubFill />,
    },
   
]

export default function Socials({containerStyles, iconStyles}) {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => (
            <Link href={icon.path} key={index}>
                <div className={`${iconStyles}`}>{icon.name}</div>
            </Link>
        ))}
    </div>
  )
}
