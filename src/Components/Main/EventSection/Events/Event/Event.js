import { hasProps } from "@react-spring/core/dist/declarations/src/helpers";
import React from "react";

const Event = (props) => {
    return (
        <div>
            <div><img src="" /></div>
            <div>
                <h1>{props.title}</h1>
                <h1>{props.amount}</h1>

                <div>
                    {props.story}
                </div>
            </div>
        </div>
    )
}
export default Event