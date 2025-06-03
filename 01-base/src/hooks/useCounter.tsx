import { useState } from "react";

export const useCounter = () => {
    const [counter, setCounter] = useState<number>(10);

    const onIncrementBy = (value: number) => {
        setCounter(Math.max(counter + value, 0 ))
    };


    return {
        //Propiedades
        counter,

        //Metodos
        onIncrementBy
    }
}