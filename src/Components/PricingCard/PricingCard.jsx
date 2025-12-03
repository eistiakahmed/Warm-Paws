import React from 'react';
import { Check, X, Star } from 'lucide-react';

const pricingPlans = [
  {
    id: 1,
    days: '1 Day',
    room: 'Double room',
    socialise: 'Socialise',
    brush: 'Brush',
    petTV: false,
    price: 50,
    highlight: false,
  },
  {
    id: 2,
    days: '10 Days',
    room: 'Single room',
    socialise: 'Socialise & Exercise',
    brush: 'Custom Meals',
    petTV: 'Spa and Grooming',
    price: 350,
    highlight: true,
  },
  {
    id: 3,
    days: '20 Days',
    room: 'Single room',
    socialise: 'Exercise 2x',
    brush: 'Custom Meals',
    petTV: 'Grooming 2x',
    price: 550,
    highlight: false,
  },
];

const PricingCard = () => {
  return (
    <section className="py-20">
      {/* Header */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 mt-4 text-lg md:text-xl">
          We provide premium care for your pets. Select the plan that fits your
          needs best.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-stretch">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex-1 p-10 rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105 ${
              plan.highlight
                ? 'bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
                : 'bg-white'
            }`}
          >
            {/* Highlight Star */}
            {plan.highlight && (
              <div className="absolute top-4 right-4">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
            )}

            {/* Plan Header */}
            <div className="text-center mb-8">
              <h3 className="uppercase tracking-widest font-semibold text-sm mb-2">
                Pet Care
              </h3>
              <h2
                className={`text-3xl md:text-4xl font-bold ${
                  plan.highlight ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.days}
              </h2>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8 ">
              <li className="flex items-center gap-3">
                <Check
                  className={`w-5 h-5 ${
                    plan.highlight ? 'text-white' : 'text-green-500'
                  }`}
                />
                <span
                  className={plan.highlight ? 'text-white' : 'text-gray-700'}
                >
                  {plan.room}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check
                  className={`w-5 h-5 ${
                    plan.highlight ? 'text-white' : 'text-green-500'
                  }`}
                />
                <span
                  className={plan.highlight ? 'text-white' : 'text-gray-700'}
                >
                  {plan.socialise}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check
                  className={`w-5 h-5 ${
                    plan.highlight ? 'text-white' : 'text-green-500'
                  }`}
                />
                <span
                  className={plan.highlight ? 'text-white' : 'text-gray-700'}
                >
                  {plan.brush}
                </span>
              </li>
              <li className="flex items-center gap-3">
                {plan.petTV ? (
                  <>
                    <Check
                      className={`w-5 h-5 ${
                        plan.highlight ? 'text-white' : 'text-green-500'
                      }`}
                    />
                    <span
                      className={
                        plan.highlight ? 'text-white' : 'text-gray-700'
                      }
                    >
                      {plan.petTV}
                    </span>
                  </>
                ) : (
                  <>
                    <X
                      className={`w-5 h-5 ${
                        plan.highlight ? 'text-white' : 'text-red-500'
                      }`}
                    />
                    <span
                      className={
                        plan.highlight ? 'text-white' : 'text-gray-400'
                      }
                    >
                      Pet TV
                    </span>
                  </>
                )}
              </li>
            </ul>

            {/* Price */}
            <div className="text-center mb-8">
              <span
                className={`text-3xl md:text-4xl font-bold ${
                  plan.highlight ? 'text-white' : 'text-gray-900'
                }`}
              >
                ${plan.price}
              </span>
              <p
                className={`mt-1 text-sm ${
                  plan.highlight ? 'text-white/80' : 'text-gray-500'
                }`}
              >
                per plan
              </p>
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                className={`px-8 py-3 rounded-full font-semibold transition ${
                  plan.highlight
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCard;
