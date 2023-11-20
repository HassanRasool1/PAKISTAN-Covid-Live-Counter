import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');
            const actaulData = await res.json();
            console.log(actaulData.AN.delta);
            setData(actaulData.AN.delta);
            // console.log(actaulData.AN.delta) ----to access tested and vacinated cases
        } catch(err) {
            console.log(err);
        }
    }


    useEffect(()=>{
        
        return () => {
            getCovidData();
        };
    }, []);

  return (
    <div className='box'>
     <h1>🔴 Live</h1> 
     <h2>COVID-19 💊 CASES PAKISTAN TRACKER</h2>
     <section>
     <ul>
        <li className='card'>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>OUR</span> COUNTRY</p>
                    <p className='card_total card_small'>PAKISTAN</p>
                </div>
            </div>
        </li>
        <br></br>
        <li className='card'>
            <div className='card_main2'>
                <div className='card_inner'>
                    <p className='card_name'><span>Total</span> RECOVERED</p>
                    <p className='card_total card_small'>{data.tested}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card_main3'>
                <div className='card_inner'>
                    <p className='card_name'><span>Total</span> CONFIRMED</p>
                    <p className='card_total card_small'>{data.vaccinated1}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card_main4'>
                <div className='card_inner'>
                    <p className='card_name'><span>Total</span> DEATHS</p>
                    <p className='card_total card_small'>{data.vaccinated2}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card_main5'>
                <div className='card_inner'>
                    <p className='card_name'><span>Total</span> ACTIVE</p>
                    <p className='card_total card_small'>{data.tested}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card_main6'>
                <div className='card_inner'>
                    <p className='card_name'><span>Last</span> UPDATED</p>
                    <p className='card_total card_small'>NEVER</p>
                </div>
            </div>
        </li>
     </ul>
     </section>
    </div>
  )
}

export default Covid
