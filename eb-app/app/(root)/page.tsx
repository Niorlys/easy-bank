import React from 'react'
import HeaderBox from '@/components/HeaderBox'

const Home = () => {
  const loggedInUser = {"firstName": "Niorlys", "lastName": "Mendez"};//await getLoggedInUser();
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type="greeting"
                title="Welcome back"
                subtext="Access your account and manage your finances"
                user={loggedInUser?.firstName || "Guest"}
                 />
            </header>
        </div>
    </section>
  )
}

export default Home