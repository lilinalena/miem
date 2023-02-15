import React from "react";
import "./MenuBlock.css";

function MenuBlock(props) {
    return (
        <div style={{ paddingLeft: 0 }} className="col-2">
            <div
                className={ "menu-block " + (props.isActive ? "menu-block-active" : "") }
                onClick={ () => { props.onAppTypeChange(props.type) } }
            >
                { props.name }
            </div>
        </div>
    );
}

export default MenuBlock;
