SELECT customer_number
FROM Orders
GROUP BY customer_number
HAVING COUNT(customer_number) = (
    SELECT MAX(order_count)
    FROM (
        SELECT COUNT(customer_number) AS order_count
        FROM Orders
        GROUP BY customer_number
    ) subquery
);