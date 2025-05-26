import React from 'react';

const About = () => {
  return (
    <div className="relative w-11/12 mx-auto p-6 text-gray-800">
      <div className="absolute inset-0 object-cover min-h-screen flex justify-center items-center">
        <img
          className="opacity-20"
          src="./logo.png"
        />
      </div>
      <div className="relative z-10">
        {' '}
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">
          About Saste Khana
        </h1>
        <p className="text-lg mb-6">
          Welcome to <strong>Saste Khana</strong>, India’s most reliable and
          user-friendly food price comparison platform. Our mission is simple:{' '}
          <em>
            help you enjoy your favorite meals at the lowest possible cost
          </em>
          .
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🔍 What We Do</h2>
          <p>
            Saste Khana compares prices across major food delivery platforms
            like <strong>Zomato</strong> and <strong>Swiggy</strong>—including
            menu prices, delivery fees, platform charges, and coupons—so you can
            find the cheapest way to order your food.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            💡 Why Choose Saste Khana?
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Live Price Comparison:</strong> Real-time data from
              multiple platforms.
            </li>
            <li>
              <strong>Smart Coupon Engine:</strong> Automatically applies the
              best available discounts.
            </li>
            <li>
              <strong>Transparent Charges:</strong> Breaks down every rupee—GST,
              platform fees, delivery, and more.
            </li>
            <li>
              <strong>Data-Driven Savings:</strong> Our algorithm ensures
              maximum savings on every order.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🚀 How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Enter your location</li>
            <li>Select your food items</li>
            <li>We calculate the total cost across platforms</li>
            <li>You choose the cheapest option and place your order</li>
          </ol>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            👨‍💻 Built by Food Lovers, For Food Lovers
          </h2>
          <p>
            We're a team of developers and foodies who believe tech can help
            beat food inflation. Whether you’re a student, professional, or
            anyone who loves saving money—Saste Khana was made for you.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">📈 Our Vision</h2>
          <p>
            To become India’s go-to savings engine for food delivery—one
            delicious meal at a time.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">📬 Contact Us</h2>
          <p>
            Have feedback or ideas? Reach us at{' '}
            <a
              href="mailto:contact@sastekhana.in"
              className="text-blue-600 underline"
            >
              contact@sastekhana.in
            </a>
            .
          </p>
        </section>
        <div className="text-center text-xl font-semibold mt-10">
          Eat Smart. Pay Less.{' '}
          <span className="text-primary">Love Saste Khana</span> 🍽️
          <p className="text-sm italic mt-1">
            "Because saving ₹100 on dinner tastes almost as good as dinner
            itself."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
