import  useRestaurantMenu  from "../utils/useRestaurantMenu"

const RestuarantMenu = () => {

    const resInfo = useRestaurantMenu();

    return (
        <div className="Menu">
            <h1>Name of the Restaurant</h1>
            <p>Cusinies</p>
            <div>
                <h2>Lemon Rice</h2>
                <h2>Biryani</h2>
            </div>
        </div>
    )
}

export default RestuarantMenu;