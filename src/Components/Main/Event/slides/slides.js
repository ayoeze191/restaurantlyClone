import react from "react"
import "./slides.css"


const Slides = (props) => {
    return(
        <div className="slides" >
                    <div className="slideImages"><img src={props.image} /></div>
                    <div className="content">
                        <p className="title">{props.title}</p>
                        <p className="amount">{props.amount}</p>
                        <div className="slidesStory">
                    <p>{props.storyOne}</p>
                    <ul>
                        <li>
                        {props.storyTwo1}</li>
                        <li>
                        {props.storyTwo2}</li>
                        <li>
                        {props.storyTwo3}</li>
                    </ul>
                    <p>{props.storyThree}</p>
                        </div>
                    </div>

            </div>
    )
}



export default Slides