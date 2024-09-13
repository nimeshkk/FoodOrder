import React, { useState } from 'react';
import { CreditCard, CheckCircle, ArrowLeft } from 'lucide-react';

const CheckoutPage = ({ total, onBackToCart, onSuccessfulCheckout }) => {
  const [step, setStep] = useState('method');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
    setStep('details');
  };

  const handleCardDetailsChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the payment processing
    // For this example, we'll just move to the success step
    setStep('success');
  };

  const handleBackButton = () => {
    if (step === 'details') {
      setStep('method');
    } else if (step === 'method') {
      onBackToCart();
    }
  };

  const renderBackButton = () => (
    <div className="flex justify-center mt-4">
        <button
        onClick={handleBackButton}
        className="flex items-center justify-center mt-4 py-2 px-4 rounded"
    >
        <ArrowLeft size={20} className="mr-2" />
        Go Back
    </button>
  </div>
  );

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
      {step === 'method' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select Payment Method</h2>
          <button
            onClick={() => handlePaymentMethodSelect('card')}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-2"
          >
            Credit/Debit Card
          </button>
          <button
            onClick={() => handlePaymentMethodSelect('paypal')}
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded"
          >
            PayPal
          </button>
        </div>
      )}

      {step === 'details' && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Enter Card Details</h2>
          <div className="mb-4">
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailsChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 mr-2">
              <label className="block mb-2">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailsChange}
                className="w-full p-2 border rounded"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Cardholder Name</label>
            <input
              type="text"
              name="cardholderName"
              value={cardDetails.cardholderName}
              onChange={handleCardDetailsChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded"
          >
            Pay LKR {total.toFixed(2)}
          </button>
        </form>
      )}

      {step === 'success' && (
        <div className="text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
          <button
            onClick={() => {
              onSuccessfulCheckout();
              onBackToCart();
            }}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Back to Cart
          </button>
        </div>
      )}

      {step !== 'success' && renderBackButton()}
    </div>
  );
};

export default CheckoutPage;
