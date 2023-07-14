import { useNavigate } from 'react-router-dom';


export default function Homepage() {
    const navigate = useNavigate()

    const routeToOrder = () => {
        navigate("/pizza")
    }

    return (
        <div>
            <p>Your favorate food, delivered while coding</p>
            <button onClick={routeToOrder} id='order-pizza' >
                Order Now!
            </button>
        </div>
    )
}