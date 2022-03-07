import React from "react";
import lobsterBisque from '../../../../assets/menu/lobsterBisque.jpg'
import breadBarrel from '../../../../assets/menu/breadBarrel.jpg'
import caesar from '../../../../assets/menu/caesar.jpg'
import greekSalad from '../../../../assets/menu/greekSalad.jpg'
import lobsterRoll from '../../../../assets/menu/lobsterRoll.jpg'
import mozzarella from '../../../../assets/menu/mozzarella.jpg'
import tuscanGrilled from '../../../../assets/menu/tuscanGrilled.jpg'
import spinachSalad from '../../../../assets/menu/spinachSalad.jpg'
import cake from '../../../../assets/menu/cake.jpg';
import Menu from "./Menu/Menu";
import './Menus.css'
import { Transition, animated } from 'react-spring';


const Menus = (props) => {
    const items = [
        {image: lobsterBisque, ingredients: "Lobster Bisque", ingredientsDescription: "Lorem, deren, trataro, filede, nerada", price: "$5.95"},
        {image: breadBarrel, ingredients: "BreadBarrel", ingredientsDescription: "Lorem, deren, trataro, filede, nerada", price: "$6.95"},
        {image: cake, ingredients: "Crab Cake", ingredientsDescription: "A delicate crab cake served on a toasted roll with lettuce", price: "$7.95"},
        {image: caesar, ingredients: "Caesar Selection", ingredientsDescription: "Lorem, deren, trataro, filede, nerada", price: "$8.95"},
        {image: tuscanGrilled, ingredients: "Tuscan Grilled", ingredientsDescription: "Grilled chicken with provolone, artichoke hearts, and roasted red pesto", price: "9.95"},
        {image: mozzarella, ingredients: "Mozzarella Stick", ingredientsDescription: "Lorem, deren, trataro, filede, nerada" , price: "$12.95"},
        {image: greekSalad, ingredients: "Greek Salad", ingredientsDescription: "Fresh spinach, crisp romaine, tomatoes, and Greek olives", price: "$13.95"},
        {image: spinachSalad, ingredients: "Spinach Salad", ingredientsDescription: "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette", price: "10.95"},
        {image: lobsterRoll, ingredients: "Lobster Roll", ingredientsDescription: "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll", price: "11.95"},
    ]
    return(
        <div className = "Menus">
            {
        items.map(item => {
            let count = 0;
            const a = props.value.map((d) => (
                d === item.ingredients
            ))
            .map((check) => {
                if(check === true){
                    count += 1;
                }
            });
            const checked = count > 0
            // return
            return <Menu {...item} class = {checked > 0}/>
        })
        
        
        
        
        }
        </div>

    )
}

export default Menus