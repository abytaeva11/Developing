import React from "react"
import Hero from "../../pages/Hero/Hero";
import Tabs from "../../pages/Tabs/Tabs";
import InfoFollowers from "../../pages/InfoFollowers/InfoFollowers";
import Questions from "../../pages/Questions/Questions";


const Global=()=>{
    return(
        <div>
            <Hero/>
            <Tabs/>
            <InfoFollowers/>
            <Questions/>
        </div>
    )
}
export default Global;