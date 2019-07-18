CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("1", "TV", "Electronics", 300, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("2","Sofa", "Home", 600, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3", "Backpack", "Travel", 50, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("4", "Coffee Maker", "Kitchen", 35, 350);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("5", "Lawn Mower", "Gardening", 150, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("6", "Skateboard", "Toys", 100, 250);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("7", "Phone Case", "Electronic Accessories", 40, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("8", "Blanket", "Home", 30, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("9", "Car Air Freshener", "Auto", 10, 250);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("10", "Running Shoes", "Shoe", 50, 325);