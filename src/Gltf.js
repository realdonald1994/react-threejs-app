import React,{Component} from "react";
import * as THREE from "three";
import Orbitcontrols from "three-orbitcontrols";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import model from "./assets/scene.glb";

export default class Gltf extends Component{
    componentDidMount() {
        this.init();
    }

    init=()=>{
        let isMouseDown = false;
        this.isMouseDown = isMouseDown;

        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
        const renderer = new THREE.WebGLRenderer({antialias:true});
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        renderer.setSize(width,height);
        renderer.setClearColor('#dddddd');
        renderer.setPixelRatio(window.devicePixelRatio);
        this.mount.appendChild(renderer.domElement);

        //OrbitControl adjust camera
        const orbitControl = new Orbitcontrols(camera,renderer.domElement);
        //camera unable
        // orbitControl.enabled = false;
        //Damping
        //auto rotate
        orbitControl.autoRotate = true;
        orbitControl.autoRotateSpeed = 1.0;
        //mouse click rotate

        //drag
        orbitControl.enablePan = true;
        this.orbitControl = orbitControl;


        camera.position.x = 800;
        camera.position.y = 100;
        camera.position.z = 1000;

        window.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mouseup', this.onMouseUp);

        this.createSphere();
        this.createLight();

    };

    createSphere = () =>{
        const loader = new GLTFLoader();
        const planetTexture = require('./assets/scene.glb');
        //loader.load() is asynchronous, so need to move animate to here
        loader.load(planetTexture,(gltf) =>{
            const car = gltf.scene.children[0];
            car.scale.set(0.5,0.5,0.5);
            this.scene.add(gltf.scene);
            this.animate();
        });
    };

    //Light Optional?
    createLight = () =>{
        const ambi = new THREE.AmbientLight(0x404040,100);
        this.scene.add(ambi);
        const spotLight = new THREE.DirectionalLight(0xffffff,100);
        spotLight.position.set(0,1,0);
        spotLight.castShadow = true;
        this.scene.add(spotLight);
        const pointLight = new THREE.PointLight('#c4c4c4',10);
        pointLight.position.set(0,300,500);
        this.scene.add(pointLight);
        const pointLight2 = new THREE.PointLight('#c4c4c4',10);
        pointLight.position.set(500,100,0);
        this.scene.add(pointLight2);
        const pointLight3 = new THREE.PointLight('#c4c4c4',10);
        pointLight.position.set(0,100,-500);
        this.scene.add(pointLight3);
        const pointLight4 = new THREE.PointLight('#c4c4c4',10);
        pointLight.position.set(-500,300,500);
        this.scene.add(pointLight4);
    };

    onMouseDown = () =>{
        this.isMouseDown = true;
    };

    onMouseUp = () => {
        this.isMouseDown = false;
    };

    animate=()=>{
        if(!this.isMouseDown){
            // this.sphere.rotation.y += -0.005;
            // this.sphere.rotation.x += 0.005;
            this.orbitControl.update();
        }
        this.renderScene();
        requestAnimationFrame(this.animate);
    };

    renderScene = () =>{
        this.renderer.render(this.scene,this.camera);
    };

    componentWillUnmount() {
        this.mount.removeChild(this.renderer.domElement);
    }

    render() {
        return(
            <div
                className="vis"
                ref={mount=>{this.mount=mount}}
            />
        );
    }

}
