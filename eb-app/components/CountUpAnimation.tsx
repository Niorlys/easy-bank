'use client'
import CountUp from 'react-countup'

const CountUpAnimation = ({amount}: {amount: number}) => {
  return (
    <div className="w-full">
        <CountUp end={amount}
        decimals={2}
        duration={2.7}
        separator=","
        prefix="$"
        />
    </div>
  )
}

export default CountUpAnimation