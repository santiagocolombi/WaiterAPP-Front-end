import { OrdersBoard } from "../OrdersBoard"
import { Container} from "./styles"
import { Order } from "../../types/Order";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";


export function Orders(){
const [orders, setOrders] = useState<Order[]>([]);
useEffect(() => {
    const interval = setInterval(() => {
      api.get('/orders')
        .then(({ data }) => setOrders(data))
        .catch(console.error);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
    api.get('/orders')
        .then(({data}) =>{
            setOrders(data);
        })
},[]);
 const waiting = orders.filter((order) => order.status === 'WAITING' );
 const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION' );
 const done = orders.filter((order) => order.status === 'DONE' )
 function  handleCancelOrder(orderId: string){
    setOrders((prevState) => prevState.filter(order => order._id !== orderId))
 }
function handleOrderStatusChage(orderId: string, status: Order['status']){
    setOrders((prevState) => prevState.map((order) => (
        order._id === orderId
         ? {...order, status}
         : order
    )))
}
    return (
        <Container>
            <OrdersBoard icon="⏳" title="Fila de espera" orders={waiting}onCancelOrder={handleCancelOrder}onChangeOrderStatus={handleOrderStatusChage}/>
            <OrdersBoard icon="🧑‍🍳" title="Em preparo" orders={inProduction}onCancelOrder={handleCancelOrder}onChangeOrderStatus={handleOrderStatusChage}/>
            <OrdersBoard icon="✅" title="Pronto"orders={done}onCancelOrder={handleCancelOrder}onChangeOrderStatus={handleOrderStatusChage}/>

        </Container>
    )
}
