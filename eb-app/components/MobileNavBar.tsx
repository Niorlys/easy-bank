'use client'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import Image from "next/image"
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MobileNavBar = ({user}: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" alt="menu" width={30} height={30} className="cursor-pointer"/>
        </SheetTrigger>
        <VisuallyHidden>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            Menu
          </SheetDescription>
        </SheetHeader>
        </VisuallyHidden>
        <SheetContent side="left" className="border-none bg-white">
        <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
                <Image src="/icons/favicon.svg" alt="EasyBank" width={34} height={34}
                 />
                <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">EasyBank</h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                      const isActive = pathname === item.route 
                      || pathname.startsWith(`${item.route}/`);
                      return (
                        <SheetClose asChild key={item.label}>
                        <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}>
                            <Image src={item.imgURL} alt={item.label} 
                            // Inverting the image when the link is active
                            className={cn({'brightness-[3] invert-0': isActive})}
                            width={20}
                            height={20}
                             />  
                          <p className={cn('text-16 font-semibold text-black-2', {'text-white': isActive})}>{item.label}</p>
                        </Link>
                        </SheetClose>
                      )
                    }      
                  )}
                USER
                </nav>
            </SheetClose>
            Footer
          </div>
        </SheetContent>
    </Sheet>
    </section>
  )
}

export default MobileNavBar