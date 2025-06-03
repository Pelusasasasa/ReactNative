import { useCounter } from "../hooks/useCounter"

export const Counter = () => {

    const { counter, onIncrementBy} = useCounter();

  return (
    <>
        <h3 className="text-2xl">
            Contador <span className="font-bold">{counter}</span>    
        </h3>
        <button 
        onClick={() => onIncrementBy(-1)}
        className="bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700 cursor-pointer">
            -1
        </button>
        <button 
        onClick={() => onIncrementBy(+1)}
        className="bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700 cursor-pointer">
            +1
        </button>
    </>
  )
}
