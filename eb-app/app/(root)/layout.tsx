import SideBar from '@/components/SideBar'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = {"firstName": "Niorlys", "lastName": "Mendez"};//await getLoggedInUser();
  return (
    // Screen high + full width + font inter
    <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedInUser as User} />
        {children}
    </main>
  );
}
