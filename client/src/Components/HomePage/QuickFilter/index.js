import React from "react";
import QuickFilterMB from "./QuickFilterMB";
import QuickFilterPC from "./QuickFilterPC";
import Media from 'react-media';
const QuickFilter = () =>{
    return(
        <div>
            <Media queries={{
                mobile:"(max-width:599px)"
            }}>
                {matches=>matches.mobile?<QuickFilterMB/>:<QuickFilterPC/>}
            </Media>
        </div>
    )
}
export default QuickFilter;