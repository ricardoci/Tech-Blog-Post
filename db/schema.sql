-- lacks a "DROP DATABASE IF EXISTS tBuilding_db;" as this will be a product to be run on servers potentially containing sensitive databases"

-- check for database conflict before running
DROP DATABASE IF EXISTS blog_db;
-- remove above code before project completion



CREATE DATABASE blog_db;

USE blog_db;
