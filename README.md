
# Table of Contents

- [Features](#features)
- [Technologies Used](#tech-stack)
- [Installation](#setup)

<a id="features"></a>

# Features
- **Total Revenue**: View real-time updates on total revenue generated by the e-commerce platform.

- **Total Profit**: Monitor the total profit earned from sales transactions, providing insights into business profitability.

- **Total Product**: Track the total number of products available in the inventory, ensuring inventory management.

- **Total Orders**: Stay informed about the total number of orders placed, enabling efficient order fulfillment.

- **Sales Analysis Line Chart**: Visualize sales data trends over time with an interactive line chart, aiding in strategic decision-making.

- **Region Distribution Doughnut Chart**: Gain insights into sales distribution across different regions with an intuitive doughnut chart.

- **Top Customer Detail**: Identify top customers based on their purchasing behavior and transaction history, fostering customer relationship management.

- **Top Product Detail: Discover top**-selling products and their performance metrics, facilitating inventory optimization.

- **Sales by Subcategory**: Analyze sales performance by subcategories, helping to identify product categories driving revenue growth.

<a id="tech-stack"></a>

# Tech Stack

- ReactJs
- React Context API
- NodeJs
- ExpressJs
- MongoDB

    ### **Libraries Used**

- React Router (for client-side routing)
- Tailwind css (for UI components)
- Axios (for making HTTP requests)
- ChartJs, Rechart.JS (For Charts)

<a id="setup"></a>

# Project Setup Guide

## Frontend

1. Clone TailBoost-fe repo and install dependencies

   ```sh
   git clone https://github.com/okyash007/sales-performance
   npm i
   ```

2. Start the react app

   ```sh
   npm run dev
   ```

## Backend

1. Add .env in the ./backend directory. Here's an example env file for you.

   ```sh
   MONGODB_URI
   ```

2. Start the backend server

   ```sh
   npm run dev
   ```

<a id="working-model-ss"></a>


## Endpoints

### GET /order

**Description**: Fetches the Total Revenue, Total Profit,Total Number of products, Total Orders and top 7 Statewise data.

### GET /order/categoryWise?category={category}

**Description**: Fetches the sales data on the basis of category.

**Parameters**:
- `category`: The identifier of the categories in the data.
 
### GET /order/yearWise?year={year}

**Description**: Fetches the sales data on the basis of year.

**Parameters**:
- `year`: The identifier by which it fetches the data of that year.

### GET /product

**Description**: Fetches the products from the database.

### GET /product/:id

**Description**: Fetches the product on the basis of its unique parameter.

**Parameters**:
- `id`: The unique identifier of the product.

### POST /order/addOrder

**Description**: Adding the orderDetails.

**Request Body**:
```json
{
  "order_id": "ORD123",
  "amount": 999,
  "profit": 199,
  "quantity": 1,
  "category": "Electronics",
  "sub_category": "Smartphones",
  "payment_mode": "EMI",
  "order_date": "2024-03-31T00:00:00.000+00:00",
  "customer_name": "John",
  "state": "California",
  "city": "Los Angeles"
}
```
### POST /product/addProduct

**Description**: Adding the product to the product Collection.

**Request Body**:
```json
{
  "name": "iPhone 13",
  "price": 99999,
  "product_id": "AAPL123",
  "category": "Electronics",
  "sub_category": "Smartphones",
  "cost_price": 12000,
}
```

