import React from 'react';
import './App.css';
import ThreeMap from "./ThreeMap";
import VisWithClas from "./VisWithClas";
import Three from "./Three";
import Earth from "./Earth";
import Simple from "./components/Simple";
import DemoEarth from "./components/DemoEarth";
import GltfEntry from "./GltfEntry";
import Gltf from "./Gltf";

function App() {
  return (
    <div className="App">
      <div>
        {/*<ThreeMap/>*/}
        {/*<VisWithClas/>*/}
        {/*<Three/>*/}
        {/*<Earth/>*/}
        {/*<Simple width={window.innerWidth} height={window.innerHeight}/>*/}
        {/*<DemoEarth width={window.innerWidth} height={window.innerHeight}/>*/}
        <Gltf/>
      </div>
    </div>
  );
}

export default App;
