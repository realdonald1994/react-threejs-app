import React,{Component} from "react";
import * as THREE from "three";
import Orbitcontrols from "three-orbitcontrols";


export default class Earth extends Component{
    componentDidMount() {


        this.init();
    }

    init=()=>{
        let isMouseDown = false;
        this.isMouseDown = isMouseDown;

        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60,width/height,1,2000);
        const renderer = new THREE.WebGLRenderer({antialias:true});
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        renderer.setSize(width,height);
        renderer.setClearColor('#000000');
        renderer.setPixelRatio(window.devicePixelRatio);
        this.mount.appendChild(renderer.domElement);

        //OrbitControl mouse interaction
        let orbitControl = new Orbitcontrols(camera,renderer.domElement);
        orbitControl.autoRotate = false;


        camera.position.x = -10;
        camera.position.y = 15;
        camera.position.z = 500;

        window.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mouseup', this.onMouseUp);

        this.createSphere();
        this.createLight();

    };

    createSphere = () =>{
        const loader = new THREE.TextureLoader();
        const planetTexture = require('./assets/imgs/planets/Mars_2k-050104.png');
        //loader.load() is asynchronous, so need to move animate to here
        loader.load(planetTexture,(texture) =>{
            const geometry = new THREE.SphereGeometry(200,200,200);
            const material = new THREE.MeshBasicMaterial({map:texture,overdraw:0.5});
            const sphere = new THREE.Mesh(geometry,material);
            this.sphere = sphere;
            this.scene.add(sphere);
            this.animate();
        });
    };

    //Light Optional?
    createLight = () =>{
        const ambi = new THREE.AmbientLight(0x686868);
        this.scene.add(ambi);
        const spotLight = new THREE.DirectionalLight(0xffffff);
        spotLight.position.set(550,100,550);
        spotLight.intensity = 0.5;
        this.scene.add(spotLight);
    };

    onMouseDown = () =>{
        this.isMouseDown = true;
    };

    onMouseUp = () => {
        this.isMouseDown = false;
    };

    animate=()=>{
        if(!this.isMouseDown){
            this.sphere.rotation.y += -0.005;
            this.sphere.rotation.x += 0.005;
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