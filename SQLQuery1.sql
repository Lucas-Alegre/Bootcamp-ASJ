select o.number_order, o.date, o.total
from orders o
WHERE o.total >
(select AVG(p.sale_price)
from products p);