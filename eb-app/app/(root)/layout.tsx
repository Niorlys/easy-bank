import MobileNavBar from '@/components/MobileNavBar';
import SideBar from '@/components/SideBar'
import Image from 'next/image'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = {"firstName": "Niorlys", "lastName": "Mendez"};//await getLoggedInUser();
  return (
    // Screen high + full width + font inter
    <main className="flex h-screen w-full font-inter">
        {/* Sidebar is hidden on mobile (max-md:hidden in CSS), shown on desktop */}
        <SideBar user={loggedInUser as User} />
        
        <div className="flex size-full flex-col">
          {/* Root Layout uses md:hidden, this is; it hides on
          screens with sizes from md (768px) and up */}
          <div className="root-layout">
            <Image src="/icons/favicon.svg" alt="logo" width={30} height={30} />
            <div>
              <MobileNavBar user={loggedInUser as User} />
            </div>

          </div>
          {children}
        </div>
    </main>
  );
}
