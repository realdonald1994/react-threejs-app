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
import Iframe from "./Iframe";
import SketchfabApi from "./SketchfabApi";
import ExampleApp from "./examples/ExampleApp";

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
        {/*<Gltf/>*/}
        <Iframe
            title="A 3D model"
            url="https://sketchfab.com/models/b994a38b08264c31a0711d65c0e19d45/embed?preload=1"
            width="1000"
            height="480"
            allow="autoplay; fullscreen; vr"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
        />
        {/*<SketchfabApi urlid="dd958716be0b4786b8700125eec618e5"/>*/}
        {/*<ExampleApp/>*/}
      </div>
    </div>
  );
}

export default App;
