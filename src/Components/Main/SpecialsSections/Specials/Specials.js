import React, { useEffect,useLayoutEffect, useState } from "react";
import Special from "./Special/Special";

import specials1 from '../../../../assets/specials1.png'
import specials2 from '../../../../assets/specials2.png'
import specials3 from '../../../../assets/specials3.png'
import specials4 from '../../../../assets/specials4.png'
import specials5 from '../../../../assets/specials5.png'

const Specials = (props) => {
    const [status, setStatus] = useState(null);
    const lis = [
        {image: specials1, Topic: "Architecto ut aperiam autem id", 
        description1: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
         description2: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero"
        },
        {image: specials2, Topic: "Et blanditiis nemo veritatis excepturi", description1: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
         description2: "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal"
        },
        {image: specials3, Topic: "Impedit facilis occaecati odio neque aperiam sit", 
        description1: "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut", 
        description2: "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae"
    },
        {image: specials4, Topic: "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
        description1: "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
        description2: "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore"
    },
        {image: specials5, Topic: "Est eveniet ipsam sindera pad rone matrelat sando reda",
        description1: "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
        description2: "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel"
    },
     ]

     //Note: You can also use useLayoutEffect here cus  they are similar only that useLayoutEffect runs Before the functionLoads
   useEffect(() => {
    setStatus(props.no)
   }
   ,[props.no])

    return (
        <div className = "Specialss">
            {/* {lis.map((a) => {
                
                return <Special {...a}/>
                
            }) } */}
            <Special {...lis[status]}/>
        </div>
    )
}

export default Specials