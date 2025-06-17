
import './index.css'
import Panel from './Panel'
import GridStackContainer from './GridStackContainer'
import GridStackItem from './GridStackItem'
import BarsWheather from './Charts/BarsWheather'
import StackedAreasGDP from './Charts/StackedAreasGDP'
import PieActiveArc from './Charts/PieActiveArc'
import BasicSactter  from './Charts/BasicSactter'
import RealTimePerformance from './Charts/RealTimePerformance'
import DataTable from './DataTable/DataTable'
import RealTimeCores from './Charts/RealTimeCores'


export default function App() {
  return (
   <div className='w-full h-full'>

    <GridStackContainer>
      
      <GridStackItem id="item1">
        <Panel title="Country Rainfall">
        <BarsWheather/>
        </Panel>
      </GridStackItem>
      
      
      <GridStackItem id="item2">
        <Panel title="Countrys GDP">
         <StackedAreasGDP/>
        </Panel>
      </GridStackItem>
      
      
      <GridStackItem id="item3">
        <Panel title="WEB usage stats">
          <PieActiveArc/>
        </Panel>
      </GridStackItem>

      <GridStackItem id="item4">
        <Panel title="Basic Sactter Chart">
          <BasicSactter/>
        </Panel>
      </GridStackItem>

      <GridStackItem id="item5">
        <Panel title="CPU Performance">
          <RealTimePerformance/>
        </Panel>
      </GridStackItem>

      <GridStackItem id="item6">
        <Panel title="Country Density Datatable">
          <DataTable/>
        </Panel>
      </GridStackItem>

      <GridStackItem id="item7">
        <Panel title="CPU Core Performance">
          <RealTimeCores/>
        </Panel>
      </GridStackItem>

    </GridStackContainer>
   </div>
  )
}
