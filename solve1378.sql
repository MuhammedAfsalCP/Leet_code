select unique_id,name from Employees e left join EmployeeUNI U on e.id=U.id;