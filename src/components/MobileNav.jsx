import { AlignJustify } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"
import Nav from "./Nav"
import Logo from "./Logo"
import Socials from "./Socials"

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <h3 className='font-bold h4'>CU</h3>
            <Nav containerStyles="flex flex-col items-center gap-y-6" linkStyles="text-2xl" />
            <Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
