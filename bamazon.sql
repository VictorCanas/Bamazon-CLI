CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL,
    product_name VARCHAR (200) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price DECIMAL (10, 2),
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "iPhone X", "Electronics", 1001.99, 600); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Airpods", "Electronics", 19.99, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Overwatch", "Games", 29.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Crash Bandicoot N. Sane Trilogy", "Games", 39.99, 80);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Fifa 18", "Games", 39.99, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "12 Rules for Life: An Antidote to Chaos", "Books", 9.99, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Recovery: Freedom from Our Addictions", "Books", 10.99, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Deep Work: Rules for Focused Success in a Distracted World", "Books", 19.99, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "4life Pro-TF, 15 oz.", "Health & Wellness", 19.99, 350);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "4life Transfer Factor Plus", "Health & Wellness", 50.99, 1000);

SELECT * FROM products;

