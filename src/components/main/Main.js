'use client'
import React, { useEffect, useState } from 'react'

const url = 'https://finage-currency-data-feed.p.rapidapi.com/convert?from=BTC&to=USD&amount=2&apikey=API_KEYUX0RG2F4BXCV5JJ50P0K3BLFQOS0Q0DP';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'adc441dc4emsh58dd06684f66a92p157110jsn7411e9e4dd47',
		'X-RapidAPI-Host': 'finage-currency-data-feed.p.rapidapi.com'
	}
};

async function getData() {    
    const res = await fetch(url, options);
    const result = await res.text();
    return result;
}

const Main = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const getD = async () => {
            const d = await getData();
            // console.log(d);
            setData(d);
        }

        getD();
        
    }, [])
    
    console.log(data);
    


    return (
        <section>
            <div>Main</div>
            <div>{data}</div>
        </section>
      
    );
}

export default Main