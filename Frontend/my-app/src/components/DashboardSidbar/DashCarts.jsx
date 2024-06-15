import React from 'react'
import './DashCarts.css';

import {
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilClipboardAlt
} from '@iconscout/react-unicons';

import { Cards } from './Cards';

const cartData = [
    {
        title : "Booking",
        color: {
            backGraund : 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShodow : '0px 10px 20px 0px #e0c6f5',
        },
        barValue : 60,
        value : "25.970",
        png : UilUsdSquare,
        series : [
            {
                name : 'Sales',
                data : [31,40,28,51,42,109,100],
            }
        ]
    },

    {
        title : "Revenue",
        color: {
            backGraund : 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShodow : '0px 10px 20px 0px #FDCB0c7',
        },
        barValue : 90,
        value : "25.970",
        png : UilMoneyWithdrawal,
        series : [
            {
                name : 'Sales',
                data : [10, 100, 50, 70, 80, 30, 40],
            }
        ]
    },

    {
        title : "Expensess",
        color: {
            backGraund : 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShodow : '0px 10px 20px 0px #F9D598',
        },
        barValue : 70,
        value : "25.970",
        png : UilClipboardAlt,
        series : [
            {
                name : 'Sales',
                data : [10,25,15,30,12,15,20],
            }
        ]
    }
]

const DashCarts = () => {
  return (
    <div className='cards'>
      {cartData.map((cart, id) => {
        return (
            <div className="parentContainer">
                <Cards title={cart.title} 
                color={cart.color}
                 barValue={cart.barValue} 
                 value= {cart.value}
                 png = {cart.png}
                 series={cart.series}
                  />
            </div>
        )
      })}
    </div>
  )
}

export { DashCarts} ;
