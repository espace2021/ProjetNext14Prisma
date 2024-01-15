"use client"

import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Pay = () => {
    
  const router = useRouter()

    const objPay={
        "receiverWalletId": "65a3e74c3952f91b26c5c388",
        "token": "TND",
        "amount": 100,
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
        "firstName": "Jane",
        "lastName": "Doe",
        "phoneNumber": "98656677",
        "email": "sandrahammamitlili@gmail.com",
        "orderId": "1234657",
        "webhook": "https://merchant.tech/api/notification_payment",
        "silentWebhook": true,
        "successUrl": "https://dev.konnect.network/gateway/payment-success",
        "failUrl": "https://dev.konnect.network/gateway/payment-failure",
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
