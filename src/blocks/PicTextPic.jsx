import React from "react";

const PicTextPic = (props) => {
    
    return (
        <div className="PicTextPic">
           <div className="pic">
                <img className="image left" src={props.img[0].url} alt={props.img[0].alt} />
           </div>
           <div className="text">
                {props.text}
           </div>
           <div className="pic">
                <img className="image left" src={props.img[1].url} alt={props.img[1].alt} />
           </div>
        </div>
    )
}

export default PicTextPic;