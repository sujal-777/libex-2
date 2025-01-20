const express = require('express');
require('dotenv').config();
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/stripe', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "Course",
        });

        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: 15900 * 100, // 100 INR
            currency: 'inr',
        });

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
            customer_email: 'demo@gmail.com',
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating payment session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});