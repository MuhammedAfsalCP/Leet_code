CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
DETERMINISTIC
RETURN (
    SELECT salary
    FROM (
        SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
        FROM Employee
    ) AS ranked
    WHERE ranked.rnk = N
    LIMIT 1
);
