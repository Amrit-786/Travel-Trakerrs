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
            backGround : 'linear-gradient(180deg, #9ae9e1 0%, #66debd 10%, #02c5a8 100%)',
            boxShadow : '0px 10px 20px 0px #02c5a8',
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
            backGround : 'linear-gradient(180deg, #0a89ea 0%, #02c5a8 100%)',
            boxShadow : '0px 10px 20px 0px #9ae9e1',
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
            backGround : 'linear-gradient(180deg, #9ae9e1 0%, #0a89ea 100%)',
            boxShadow : '0px 10px 20px 0px #66debd',
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
