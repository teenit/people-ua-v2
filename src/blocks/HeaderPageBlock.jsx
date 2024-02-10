import React from "react";

const HeaderPageBlock = (props) => {
    
    return (
        <div className="HeaderPageBlock">
            <div className="HeaderPageBlock--header" style={{backgroundImage:`url(${props.url})`}}>
                {props.title}
            </div>
        </div>
    )
}

export default HeaderPageBlock;