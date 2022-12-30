import { Button, Card } from '@mui/material'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useAuth } from 'contexts/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCreateStripePaymentMutation, useCreateStripeSetupIntentMutation } from 'types/graphql'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

const StripeCardForm: React.FC = () => {
  const router = useRouter()
  const stripe = useStripe()
  const elements = useElements()

  const [createStripeSetupIntentMutation] = useCreateStripeSetupIntentMutation()
  const [createStripePaymentMutation] = useCreateStripePaymentMutation()

  const [clientSecret, setClientSecret] = useState<string>()
  const [loading, setLoading] = useState(false)
  const { currentUser } = useAuth()

  const handleSubmit = async () => {
    if (!elements || !stripe || !currentUser || !clientSecret) {
      return
    }
    setLoading(true)

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      return
    }

    const { setupIntent, error } = await stripe.confirmCardSetup(clientSecret, {
      payment_method: { card: cardElement },
    })

    if (error) {
      alert(error.message)
      setLoading(false)
    }
    if (setupIntent?.payment_method) {
      const { data, errors } = await createStripePaymentMutation({
        variables: {
          stripePaymentMethodId: setupIntent?.payment_method.toString(),
        },
      })

      if (errors && errors.length > 0) {
        alert(errors[0].message)
      }

      if (data) {
        cardElement.clear()
        alert('カードの登録が完了しました。')
        router.push('/payments/')
      }

      setLoading(false)
    }
  }

  useEffect(() => {
    createStripeSetupIntentMutation().then(({ data }) => {
      if (data?.createStripeSetupIntent) {
        setClientSecret(data?.createStripeSetupIntent)
      }
    })
  }, [createStripeSetupIntentMutation])

  if (!clientSecret) {
    return null
  }

  return (
    <>
      <Card sx={{ width: 500 }}>
        <CardElement />
      </Card>
      <Button onClick={handleSubmit} disabled={!stripe || !elements} style={{ marginTop: 30 }}>
        {loading ? '送信中' : '送信する'}
      </Button>
    </>
  )
}

const StripeCardFormElement: React.FC = () => {
  return (
    <Elements stripe={stripePromise} options={{ appearance: { theme: 'stripe' } }}>
      <StripeCardForm />
    </Elements>
  )
}

export default StripeCardFormElement
