import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState, useEffect} from 'react';

export default function Quotes01(){

    const [quotes, setQuotes] = useState(['Quote 1', 'Quote 2', 'Quote 3']);
    const [currentQuote, setCurrentQuote] = useState('');

    useEffect (() => {

        const interval = setInterval(() => {

            let min = 0;
            let max = quotes.length - 1;
            let rndIndex = Math.floor(Math.random() * (max - min + 1)) + min;
            setCurrentQuote(quotes[rndIndex]);
        },3000);
        return () => clearInterval(interval);
    },[]);
    

    return(
        <div>
            {currentQuote}
        </div>
    )
}