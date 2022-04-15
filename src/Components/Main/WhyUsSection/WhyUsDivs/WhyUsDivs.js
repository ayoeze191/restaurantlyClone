import React from "react";
import WhyUsDiv from "./WhyUsDiv/WhyUsDiv";
import './WhyUsDivs.css' 
const WhyUsDivs = () => {
    const values = [ 
        {no: "01", title: "Lorem Ipsum", text: "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"},
        {no : "02", title: "Repellat Nihil", text: "Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest"},
        {no : "03", title : "Ad ad velit qui", text: "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis"}
    ]
    return (
        <div className = "WhyUsDivs">
            {
                values.map((value, index) => (
                    <WhyUsDiv {...value} id = {index}/>
                ))
            }
        </div>
    )
}


export default WhyUsDivs