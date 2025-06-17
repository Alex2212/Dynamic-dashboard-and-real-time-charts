import React, { useEffect, useRef } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css"

const GridStackContainer = (props:any) => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      const grid = GridStack.init({}, gridRef.current);

      // Function to get item dimensions
      const getItemDimensions = (el: HTMLElement) => {
        if (!el) return null;
        const node = el.gridstackNode; // Get GridStack node data
        const rect = el.getBoundingClientRect();
        if (node && rect) {
          console.log(`Item ${node.id} - Width: ${rect.width}, Height: ${rect.height}`);
        }
      };

      // Listen for resize & drag stop
      grid.on("resizestop dragstop", (event, el) => getItemDimensions(el));
    }
  }, []);

  return (
    <div className="grid-stack" ref={gridRef}>
      {props.children}
    </div>
  );
};

export default GridStackContainer;