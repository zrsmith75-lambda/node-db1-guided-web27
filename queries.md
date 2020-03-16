
-- read data
SELECT Country, City, SupplierName
FROM Suppliers
WHERE Country = '';

-- the list of all Suppliers from the USA
SELECT Country, City, Supplier
FROM Suppliers
WHERE Country = 'USA';

-- all Customer from the USA
SELECT *
FROM Customers
WHERE Country = 'USA';

-- all Customers from the USA or Paris
SELECT * 
FROM Customers
WHERE Country = 'USA'
OR City = 'Paris';

-- all the Customers from USA or Paris, asc by Country 
SELECT Country, City, CustomerName, ContactName
FROM Customers
WHERE Country = 'USA'
OR City = 'Paris'
ORDER BY Country;

-- all the Customers from USA or Paris, desc by Country 
SELECT Country, City, CustomerName, ContactName
FROM Customers
WHERE Country = 'USA'
OR City = 'Paris'
ORDER BY Country DESC;

-- all the Customers from USA or Paris, asc by Country and desc by City
SELECT Country, City, CustomerName, ContactName
FROM Customers
WHERE Country = 'USA'
OR City = 'Paris'
ORDER BY Country, City DESC;

-- all products that have a price higher than 25
SELECT * FROM [Products]
WHERE price > 25
ORDER BY price DESC;

-- all product that are the 5 highest
SELECT * FROM [Products]
WHERE price > 25
ORDER BY price DESC
LIMIT 5;