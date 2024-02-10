import React from "react";

const PicAndText = (props) => {
    
    return (
        <div className="PicAndText">
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
            <div className="PicAndText-image">
                {
                   props.url && <img src={props.url} alt={props.alt} />
                }
            </div>
        </div>
    )
}

export default PicAndText;