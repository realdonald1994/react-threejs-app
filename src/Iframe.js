import React,{Component} from "react";
import PropTypes from "prop-types";
import Pic from "./assets/Untitled.png";
import cx from 'classnames';
import Modal from "react-modal";

export default class Iframe extends Component{
    static propTypes = {
        title:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        width:PropTypes.string.isRequired,
        height:PropTypes.string.isRequired,
        allow:PropTypes.string,
        mozallowfullscreen:PropTypes.string,
        webkitallowfullscreen:PropTypes.string
    };
    state = {
        load:false,
        show:false,
        pop:false,
    };

    _handleOnover = () =>{
        this.setState({load:true});
    };

    _handleOnmove = () =>{
        this.setState({load:false});
    };

    _handleOpenClick = () =>{
      this.setState({show:true});
    };
    _handleCloseClick = () =>{
        this.setState({show:false,pop:false,load:false});
    };
    _handleNewContainer = () =>{
        this.setState({pop:!this.state.pop,show:!this.state.show});
    };
    render() {
        return (
            <div>
                <div className="frame" onMouseOver={this._handleOnover} onMouseLeave={this._handleOnmove}>
                    <div className="loadBox" >
                        <p >
                            <img  style={{width:"300px",height:"200px"}} src={Pic} alt={"load"} />
                        </p>
                    </div>

                    {
                        this.state.load?(
                            <div className="big">
                                <img  style={{width:"400px",height:"300px"}} src={Pic} onClick={this._handleOpenClick} alt={"load"}/>
                                <p>
                                    Faunes et Bacchantes
                                    <br/>
                                    Saint-Denis, ateliers d'art des musées nationaux, moulage et chalcographies
                                </p>
                            </div>
                            ):null
                    }

                    {
                        this.state.show?(
                            <div className="show">
                                <Modal
                                    isOpen={this.state.show}
                                    nRequestClose={this._handleCloseClick}
                                    shouldCloseOnOverlayClick={false}

                                >
                                    <iframe
                                        title={this.props.title}
                                        src={this.props.url}
                                        width={this.props.width}
                                        height={this.props.height}
                                        frameBorder={this.props.frameBorder}
                                        allow={this.props.allow}
                                        mozallowfullscreen={this.props.mozallowfullscreen}
                                        webkitallowfullscreen={this.props.webkitallowfullscreen}
                                    />
                                    <button onClick={this._handleNewContainer}>More information</button>
                                    <button onClick={this._handleCloseClick}>Close</button>
                                </Modal>

                            </div>

                        ):null
                    }
                    {
                        this.state.pop?(
                            <div className="popup">
                                <div className="popup_inner1">
                                    <iframe
                                        className="inner_iframe"
                                        title={this.props.title}
                                        src={this.props.url}
                                        width={this.props.width}
                                        height={this.props.height}
                                        frameBorder={this.props.frameBorder}
                                        allow={this.props.allow}
                                        mozallowfullscreen={this.props.mozallowfullscreen}
                                        webkitallowfullscreen={this.props.webkitallowfullscreen}
                                    />

                                    <button onClick={this._handleNewContainer}>View image only</button>

                                </div>
                                <div className="popup_inner2">
                                    <div className="inner_text">
                                        <p>
                                            Faunes et Bacchantes
                                        </p>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>SYSTEM IDENTIFIER <b>R5N382233</b></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>INVENTORY NUMBER <b>PB002875</b></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>FONDS <b>Sculpture</b></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>DESCRIPTION: <b>Moulage de CP3894, musée du Louvre Paris.</b></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>SYSTEM IDENTIFIER <b>R5N382233</b></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>SYSTEM IDENTIFIER <b>R5N382233</b></div>
                                        <button onClick={this._handleCloseClick}>close</button>
                                    </div>
                                </div>
                            </div>
                        ):null
                    }
                </div>
            </div>
        );
    }
}