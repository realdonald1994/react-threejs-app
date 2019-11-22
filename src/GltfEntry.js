import React,{Component} from "react";
import Gltf from "./Gltf";


export default class GltfEntry extends Component{
    componentDidMount() {
        Gltf(this.scene);
    }

    render() {
        return (
            <div ref={(element)=>{this.scene=element}}/>
        );
    }
}