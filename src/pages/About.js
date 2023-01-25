//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"
import { useCounterContext } from "../hooks/useCounterContext"
const About = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  const {color} = useTitleColorContext()
  return (
    <div>
       <h1 style={{ color: color}}>Sobre</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About