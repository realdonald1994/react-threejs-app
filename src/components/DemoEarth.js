import React,{Component} from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import Orbitcontrols from "three-orbitcontrols";
import React3 from "react-three-renderer-fiber";




export default class DemoEarth extends Component{
    static propTypes = {
        width:PropTypes.number.isRequired,
        height:PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            cameraPosition:new THREE.Vector3(-10,15,500),
            radiusDegree:200,
            wSegment:200,
            hSegment:200,
            directionalLightPosition:new THREE.Vector3(550,100,550),
            sphereRotation:new THREE.Euler(),
            doRotate: true,
        };
    }

    _onAnimate = () => {
        if(this.state.doRotate){
            this.setState({sphereRotation:new THREE.Euler(
                    this.state.sphereRotation.x + 0.005,
                    this.state.sphereRotation.y + 0.005,
                    0
                )});
        }
        requestAnimationFrame(this._onAnimate);
    };

    componentDidMount() {
        requestAnimationFrame(this._onAnimate);
    };

    render() {
        const {width,height} = this.props;
        return(
            <div className="vis">
                <React3>
                    <webGLRenderer
                        width={width}
                        height={height}
                        antialias={true}
                    >
                        <render
                            camera={
                                <perspectiveCamera
                                    fov={60}
                                    aspect={width/height}
                                    near={1}
                                    far={2000}
                                    position={this.state.cameraPosition}
                                />
                            }
                            scene={
                                <scene>
                                    <mesh rotation={this.state.sphereRotation}>
                                        <meshBasicMaterial>
                                            <texture
                                                url={require('../assets/imgs/planets/Mars_2k-050104.png')}
                                            />
                                        </meshBasicMaterial>
                                        <sphereGeometry
                                            radius={this.state.radiusDegree}
                                            widthSegments={this.state.wSegment}
                                            heightSegments={this.state.hSegment}
                                        />
                                    </mesh>
                                    <ambientLight color={'#686868'}/>
                                    <directionalLight
                                        color={'#ffffff'}
                                        position={this.state.directionalLightPosition}
                                        intensity={0.5}
                                    />
                                </scene>
                            }
                        />
                    </webGLRenderer>
                </React3>
            </div>

        );
    }
};