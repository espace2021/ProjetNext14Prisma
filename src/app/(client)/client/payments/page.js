"use client"

import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Pay = () => {
    
const router = useRouter()

const total =100;
const firstName= "Hassan"
const lastName="Hachicha"
const phoneNumber= 98123456
const email="sandrahammamitlili@gmail.com"
const orderId=1234657

    const objPay={
        "receiverWalletId": "65a3e74c3952f91b26c5c388",
        "token": "TND",
        "amount": total,
        "type": "immediate",
        "description": "payment description",
        "acceptedPaymentMethods": [
          "wallet",
          "bank_card",
          "e-DINAR"
        ],
        "lifespan": 10,
        "checkoutForm": true,
        "addPaymentFeesToAmount": true,
        "firstName": firstName,
        "lastName": lastName,
        "phoneNumber": phoneNumber,
        "email": email,
        "orderId": orderId,
        "webhook": "merchant.tech/api/notification_payment",
        "silentWebhook": true,
        "successUrl": "https://gateway.sandbox.konnect.network/payment-success",
        "failUrl": "https://gateway.sandbox.konnect.network/payment-failure",
        "theme": "light"
      }

      const Payment=()=>{
        const headers = {
              'x-api-key': '65a3e74c3952f91b26c5c384:wuIg9Sq54CosG1MhbP'
        }

        axios.post("https://api.preprod.konnect.network/api/v2/payments/init-payment", objPay, {
    headers: headers
  })
        .then((response) => {
          console.log(response);
          const payUrl = response.data.payUrl
          const paymentRef = response.data.paymentRef
           router.push(payUrl)
        })
       .catch((error) => {console.log(error)})
      }

  return (
    <div>
      <button onClick={()=>{Payment()}}>
        Payer
      </button>
    </div>
  )
}

export default Pay
