'use client'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const SideBar = ({user}: SiderbarProps) => {
  const pathname = usePathname();
  return (
    /*Notices that 'sidebar' class uses 'max-md:hidden' in CSS, that means that
    that it is hidden on screen with size up to md (768px), and shown on larger screens*/
    <section className="sidebar">
        <nav className="flex flex-col gap-4" >
            <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                <Image src="/icons/favicon.svg" alt="EasyBank" width={34} height={34}
                className="size-[34px]
                max-xl: size-18" />
                <h1 className="sidebar-logo">EasyBank</h1>
            </Link>
            
            {sidebarLinks.map((item) => {
              const isActive = pathname === item.route 
              || pathname.startsWith(`${item.route}/`);
              return (
                <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                  <div className="relative size-6">
                    <Image src={item.imgURL} alt={item.label} fill 
                    // Inverting the image when the link is active
                    className={cn({'brightness-[3] invert-0': isActive})} />  
                  </div>
                  <p className={cn('sidebar-label', {'!text-white': isActive})}>{item.label}</p>
                </Link>
              )
            }      
          )}


        </nav>
    
    </section>
  )
}

export default SideBar