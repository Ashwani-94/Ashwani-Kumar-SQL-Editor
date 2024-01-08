export const QUERIES_VALUE = [
  `-- Creating dummy tables for storing information
  
CREATE TABLE customers (
customer_id INT PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(100),
phone_number VARCHAR(20),
created_at TIMESTAMP
);

CREATE TABLE order_items (
order_item_id INT PRIMARY KEY,
order_id INT,
product_id INT,
quantity INT,
subtotal DECIMAL(10, 2),
FOREIGN KEY (order_id) REFERENCES orders(order_id),
FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- fetch some values
SELECT * FROM Order_details;`,  

  `-- Creating dummy tables for storing information

CREATE TABLE customers (
customer_id INT PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(100),
phone_number VARCHAR(20),
created_at TIMESTAMP
);

-- fetch some values
SELECT * FROM Employee_territories;`,

  `-- Creating dummy tables for storing information

CREATE TABLE order_items (
order_item_id INT PRIMARY KEY,
order_id INT,
product_id INT,
quantity INT,
subtotal DECIMAL(10, 2),
FOREIGN KEY (order_id) REFERENCES orders(order_id),
FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- fetch some values
SELECT * FROM Orders;`,

  `-- Creating dummy tables for storing information

CREATE TABLE customers (
customer_id INT PRIMARY KEY,
email VARCHAR(100),
);

CREATE TABLE order_items (
order_item_id INT PRIMARY KEY,
product_id INT,
quantity INT,
FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- fetch some values
SELECT * FROM Products;`,

]
