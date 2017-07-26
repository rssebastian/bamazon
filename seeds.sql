DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price float default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Beats by Dr. Dre', 'Electronics', 120.00, 100),
('16-inch Monitor', 'Electronics', 80.00, 100),
('Coach Handbag', 'Clothing & Accessories', 70.00, 100),
('G-Shock Wristwatch', 'Clothing & Accessories', 25.00, 100),
('Keurig Coffee Brewer', 'Home & Kitchen', 160.00, 100),
('KitchenAid Stand Mixer', 'Home & Kitchen', 280.00, 100),
('Yoga Mat', 'Heath & Fitness', 35.00, 100),
('Gym Bag', 'Health & Fitness', 20.00, 100),
('Armani Cologne', 'Beauty and Personal Care', 40.00, 100),
('EltaMD Sunscreen', 'Beauty and Personal Care', 30.00, 100);

