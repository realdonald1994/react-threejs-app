import React,{Component} from 'react';
import * as THREE from 'three';


class VisWithClas extends Component{
    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);
        const renderer = new THREE.WebGLRenderer({antialias:true});
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color:'#433F81'});
        const cube = new THREE.Mesh(geometry,material);
        let isMouseDown = false;
        camera.position.z = 4;
        scene.add(cube);
        renderer.setClearColor('#000000');
        renderer.setSize(width,height);

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.geometry = geometry;
        this.material = material;
        this.cube = cube;
        this.isMouseDown = isMouseDown;

        window.addEventListener('resize',this.handleResize);
        window.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mouseup', this.onMouseUp);
        this.mount.appendChild(renderer.domElement);
        this.start();
    }

    componentWillUnmount() {
        window.removeEventListener('resize');
        this.stop();
        this.nount.removeChild(this.renderer.domElement);
    }

    //Adaptive screen (window) size
    handleResize = () =>{
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.renderer.setSize(width,height);
        this.camera.accept = width/height;
        this.camera.updateProjectionMatrix();
        this.renderScene();
    };
    onMouseDown = () =>{
        this.isMouseDown = true;
    };

    onMouseUp = () => {
        this.isMouseDown = false;
    };
    start = () =>{
        if(!this.frameId){
            this.frameId = requestAnimationFrame(this.animate);
        }
    };

    stop = ()=>{
        cancelAnimationFrame(this.frameId);
        this.frameId = null;
    };

    animate = () =>{
        if(!this.isMouseDown){
            this.cube.rotation.x += 0.01;
            this.cube.rotation.y += 0.01;
        }
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    };
    renderScene = () =>{
        this.renderer.render(this.scene,this.camera);
    };
    render(){
        return(
            <div
                className="vis"
                ref={mount => {this.mount = mount}}
            />
        );
    }
}

export default VisWithClas;