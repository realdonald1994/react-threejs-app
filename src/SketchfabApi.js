import React,{Component} from "react";
import Sketchfab from "@sketchfab/viewer-api";
import PropType from "prop-types";
export default class SketchfabApi extends Component{
    static propTypes = {
        urlid:PropType.string.isRequired
    };
    componentDidMount(){
        const client = new Sketchfab('1.5.2',this.iframe);
        this.client= client;

        client.init( this.props.urlid, {
            // API is ready to use. You can interact with the viewer using the api object passed to the success function
            success: function onSuccess( api ){
                // Start the viewer immediately
                api.start();
            },
            // If initialization fails, throw an error
            error: function onError() {
                console.log( 'Viewer error' );
            }
        } );
    }
    // componentWillUnmount(){
    //     this.client.destroy
    // }

    render(){
        return(
            <div>
                <iframe src="" title={"A 3D model"} ref={(ref)=>{this.iframe=ref}} allowFullScreen mozallowfullscreen = "true" webkitallowfullscreen="true"/>
            </div>
        );
    }
}