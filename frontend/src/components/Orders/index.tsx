import { OrdersBoard } from "../OrdersBoard"
import { Container} from "./styles"
import { Order } from "../../types/Order";

const orders: Order[] = [
    {
    _id: "67f532f0fc06117b915aaf5d",
    table: "5",
    status: "WAITING",
    products: [
      {
        _id: "",
        quantity: 3,
        product: {
          name: "Pizza Quatro Queijos",
          imagepath: "1744122608842-quatro-queijos.png",
          price: 45.90
        }
      },
      {
        _id: "",
        quantity: 2,
        product: {
          name: "Coca cola",
          imagepath: "1744123499541-coca-cola.png",
          price: 7
        }
      }
    ]


  },


]



export function Orders(){
    return (
        <Container>
            <OrdersBoard icon="⏳" title="Fila de espera" orders={orders}/>
            <OrdersBoard icon="🧑‍🍳" title="Em preparo" orders={[]}/>
            <OrdersBoard icon="✅" title="Pronto"orders={[]}/>

        </Container>
    )
}
