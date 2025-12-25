import HeaderBox from '@/components/HeaderBox'
import BalanceBox from '@/components/BalanceBox'


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
            <BalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={13405.56}
            />
        </div>
    </section>
  )
}

export default Home