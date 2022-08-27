import React from "react";
import "./style.css";

/*  AlignedSection is a component that consistently styles sections with a left
    and right half splitting the screen in 40%, 60% or to a max of 400px (left side)
*/

export default function AlignedSection(props) {
    return (
        <div id={ props.id }>
            <div className="container">
            { props.noImg ? 
                // If image exists, render image and text from props
                <div className="aligned-section-container">
                    <div className="aligned-section aligned-section-small">
                        {props.title === undefined ? <></> : <h3>{ props.title }</h3>}
                        { props.altTitle }
                        {props.subTitle === undefined ? <></> : <h4>{ props.subTitle }</h4>}
                        { props.body === undefined ? <></> : <p>{ props.body }</p> }
                    </div>
                    <div className="aligned-section aligned-section-big">
                        { props.children }
                    </div>
                </div>
                :
                <>
                { props.imgLeft ?
                    // If image is on the left, insert image first
                    <div className="aligned-section-container">
                        <div className="aligned-section aligned-section-img">
                            { props.img }
                        </div>
                        <div className="aligned-section">
                            {props.title === undefined ? <></> : <h3>{ props.title }</h3>}
                            { props.altTitle }
                            {props.subTitle === undefined ? <></> : <h4>{ props.subTitle }</h4>}
                            { props.body === undefined ? <></> : <p>{ props.body }</p> }
                        </div>
                    </div>
                    :
                    // Otherwise, insert text first then image
                    <div className="aligned-section-container">
                        <div className="aligned-section">
                            {props.title === undefined ? <></> : <h3>{ props.title }</h3>}
                            { props.altTitle }
                            {props.subTitle === undefined ? <></> : <h4>{ props.subTitle }</h4>}
                            { props.body === undefined ? <></> : <p>{ props.body }</p> }
                        </div>
                        <div className="aligned-section aligned-section-img">
                            { props.img }
                        </div>
                    </div>
                    } 
                    </>
                }
            </div>
        </div>
    );
}