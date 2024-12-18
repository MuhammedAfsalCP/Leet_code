# Write your MySQL query statement below
SELECT IFNULL(
    (SELECT distinct(salary) FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 1),
    null
) AS SecondHighestSalary;