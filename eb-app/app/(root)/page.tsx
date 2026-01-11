import HeaderBox from '@/components/HeaderBox'
import BalanceBox from '@/components/BalanceBox'
import RightSideBar from '@/components/RightSideBar'

const Home = () => {
  const loggedInUser = {"firstName": "Niorlys", "lastName": "Mendez", "email": "nioryls@gmail.com"};//await getLoggedInUser();
  const sampleBanks = [
    {
      $id: '1',
      name: 'Bank of America',
      currentBalance: 100
    },
    {
      $id: '2',
      name: 'Crypto Bank',
      currentBalance: 200
    }
  ]
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

          RECENT TRANSACTIONS
        </div>
        <RightSideBar user={loggedInUser as User} transactions={[]} banks={sampleBanks} />
    </section>
  )
}

export default Home