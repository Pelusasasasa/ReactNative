import { useEffect, useRef, useState } from "react";

enum Operador{
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '/',
}

export const useCalculadora = () => {
    const [formula, setFormula] = useState('');
    const [number, setNumber] = useState('0');
    const [previoNumber, setPrevioNumber] = useState('0');

    const lastOperacion = useRef<Operador>(undefined);

    useEffect(() => {
        if(lastOperacion.current){
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperacion.current} ${number}`);
        }else{
            setFormula(number);
        }
    }, [number])

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevioNumber(`${subResult}`)
    }, [formula])

    const setLastNumber = () => {
        calculateResult();
        
        if(number.endsWith('.')){
            setPrevioNumber(number.slice(0, -1))
        };

        setPrevioNumber(number);
        setNumber('0')
    };

    const divideOperation = () => {

        setLastNumber();
        lastOperacion.current = Operador.divide
    };

    const multiplyOperation = () => {

        setLastNumber();
        lastOperacion.current = Operador.multiply
    };

    const subtractOperation = () => {

        setLastNumber();
        lastOperacion.current = Operador.subtract
    };

    const addOperation = () => {

        setLastNumber();
        lastOperacion.current = Operador.add
    };

    const calculateSubResult = () => {
        const [firstValue, operador, secondValue] = formula.split(' ');
        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if(isNaN(num2)) return num1;

        switch(operador){
            case Operador.add: 
                return num1 + num2;
            case Operador.subtract:
                return num1 - num2;
            case Operador.multiply:
                return num1 * num2;
            case Operador.divide:
                return num1 / num2;
            default:
                throw new Error(`Operacion ${operador} no implementado`)
        }
    };

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`)

        lastOperacion.current = undefined
        setPrevioNumber('0');
    }

    const buildNumber = (numberString: string) => {
        if(number.includes('.') && numberString === '.') return;
        if(number.startsWith('0') || number.startsWith('-0')){
            if(numberString === '.'){
                return setNumber(number + numberString)
            };

            if(numberString === '' && number.includes('.')){
                return setNumber(number + numberString)
            };

            if(numberString !== '0' && !number.includes('.')){
                return setNumber(numberString)
            };
            
            if(numberString === '0' && !number.includes('.')) return;
        }


        setNumber(number + numberString)
    };

    const clean = () => {
        setNumber('0');
        setFormula('0');
        setPrevioNumber('0');

        lastOperacion.current = undefined;
    };

    const toggleSign = () => {
        if(number.includes('-')){
            setNumber(number.replace('-', ''))
        }else{
            setNumber('-' + number)
        }
    };

    const deleteLast = () => {
        if(formula.length === 1){
           setNumber('0') ;
        }else if (formula.length === 2 && formula.includes('-')){
            return setNumber('0') ;
        }else{
            return setNumber(number.slice(0, -1))
        }
    };

    return {
        //Props
        formula,
        number,
        previoNumber,

        //Methods
        addOperation,
        buildNumber,
        clean,
        deleteLast,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        toggleSign,
        calculateSubResult,
        calculateResult
    }


};
