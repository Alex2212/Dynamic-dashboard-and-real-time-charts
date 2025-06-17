import React, {  useEffect, useRef } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css"




const GridStackItem = (props:any) => {
  return (
    <div className="grid-stack-item p-1 m-1" gs-w="3" gs-h="3" gs-id={props.id}>
        <div className="grid-stack-item-content flex flex-row justify-between items-center bg-transparent">
            {props.children}
        </div>
    </div>
  )
}

export default GridStackItem