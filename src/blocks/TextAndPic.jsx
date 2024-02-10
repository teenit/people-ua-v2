import React from "react";

const TextAndPic = (props) => {
    
    return (
        <div className="PicAndText">
            <div className="PicAndText-image">
                {
                   props.url && <img src={props.url} alt={props.alt} />
                }
            </div>
            <div className="PicAndText-text">
                {props.title && (
                    <div className="PicAndText-text-title">
                        {props.title}
                    </div>
                )}
                <div className="PicAndText-text-content">
                    {props.text}
                </div>
            </div>
            
        </div>
    )
}

export default TextAndPic;