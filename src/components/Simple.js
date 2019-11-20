import React,{Component} from "react";
import React3 from "react-three-renderer-fiber";
import * as THREE from "three";
import PropTypes from 'prop-types';

export default class Simple extends Component{
    static propTypes  = {
        width:PropTypes.number.isRequired,
        height:PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.cameraPosition = new THREE.Vector3(0,0,5);
        this.state={
            cubeRotation:new THREE.Euler(),
            doRotate: true,
            cubeWidth: 1,
        };
    }

    _onAnimate = () => {
        if(this.state.doRotate){
            this.setState({cubeRotation:new THREE.Euler(
                    this.state.cubeRotation.x + 0.005,
                    this.state.cubeRotation.y + 0.005,
                    0
                )});
        }
        requestAnimationFrame(this._onAnimate);
    };

    componentDidMount() {
        requestAnimationFrame(this._onAnimate);
    }

    render() {
        // const width = window.innerWidth;
        // const height = window.innerHeight;
        const {width,height} = this.props;
        return(
            <div className="vis">
                <React3>
                    <webGLRenderer
                        width={width}
                        height={height}
                    >
                        <render
                            camera={
                                <perspectiveCamera
                                    name="camera"
                                    fov={75}
                                    aspect={width/height}
                                    near={0.1}
                                    far={1000}
                                    position={this.cameraPosition}
                                />
                            }
                            scene={
                                <scene>
                                    <mesh rotation={this.state.cubeRotation}>
                                        <boxGeometry
                                            width={this.state.cubeWidth}
                                            height={1}
                                            depth={1}
                                        />
                                        <meshBasicMaterial color={'#00ff00'}/>
                                    </mesh>
                            </scene>}
                        />
                    </webGLRenderer>
                </React3>
            </div>
        );
    }
}