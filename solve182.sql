select email from Person group by email HAVING COUNT(email) > 1 ;