import React from "react";
import "../App.css";
import {SidebarData} from "./SideBarData";

function SideBar() {
    return (
        <div className = 'SideBar'>
            <ul className = 'SidebarList'>
            {SidebarData.map((val,key) => {
                return(
                    <li key ={key} className = 'row'>  
                        <div id = 'icon'> {val.icon} </div>
                        <div id = 'title'> {val.title} </div>
                        <div id = 'arrow'> {val.icon_dropdown}</div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default SideBar
