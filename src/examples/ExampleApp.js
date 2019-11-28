import React,{Component}from "react";
import Modal from "react-modal";


export default class ExampleApp extends Component{
    state = {
        showModal:false
    };
    handleOpenModal = () =>{
        this.setState({showModal:true});
    };

    handleCloseModal = () =>{
        this.setState({showModal:false});
    };

    render(){
        return(
            <div>
                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={false}
                    style={{
                        position:"absolute",
                        left:"0",
                        top:"0",
                        width:"85%",
                        border:"1px solid #ccc",
                        height: "400px"
                    }}
                >
                    <p>Modal text!</p>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>
            </div>
        );
    }
}
