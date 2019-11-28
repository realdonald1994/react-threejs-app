import React,{Component} from "react";
import PropTypes from "prop-types";
import Pic from "./assets/Untitled.png";
import Modal from "react-modal";


Modal.setAppElement('#root');
export default class Iframe extends Component{
    static propTypes = {
        title:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        width:PropTypes.string.isRequired,
        height:PropTypes.string.isRequired,
        allow:PropTypes.string.isRequired
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
                                <p>R5N382233</p>
                                <p>
                                    <b>Faunes et Bacchantes</b>
                                </p>
                                Saint-Denis, ateliers d'art des musées nationaux, moulage et chalcographies
                                <p>
                                    <a href=" "><u>Add to lightbox</u></a>
                                </p>
                                <p>
                                    <a href=" "><u>Add to cart</u></a>
                                </p>
                            </div>
                            ):null
                    }

                    {
                        this.state.show?(
                            <div>
                                <Modal
                                    isOpen={this.state.show}
                                    nRequestClose={this._handleCloseClick}
                                    shouldCloseOnOverlayClick={false}
                                    style={{ overlay: {width:"1150px",height:"700px",left:"10%",top:"-5%"}}}
                                >
                                    <iframe
                                        title={this.props.title}
                                        src={this.props.url}
                                        width={this.props.width}
                                        height={this.props.height}
                                        allow={this.props.allow}
                                    />
                                    <br/>
                                    <button onClick={this._handleNewContainer} style={{ display:"block",margin:"0 auto"}}>More information</button>
                                    <button onClick={this._handleCloseClick} style={{ top: "5px",right: "0px", position: "absolute"}}>X</button>
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
                                        allow={this.props.allow}
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
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>PERIOD <a href=" ">contemporary period from 1914 until today</a></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>TECHNIC/MATERIAL <a href=" ">moulded (technique)</a></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>DIMENSIONS <b>Hauteur : 0.32 mLargeur : 0.61 m</b></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>LOCALIZATION <b>Saint-Denis, ateliers d'art des musées nationaux, moulage et chalcographie</b></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>CREDIT <b>RPhoto (C) RMN-Grand Palais (Ateliers d'art des musées nationaux, moulage et chalcographie) / image RMN-GP</b></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>KEYWORDS <a href=" ">bacchante (mythology)</a>,<a href=" ">bas-relief</a>,<a href=" ">casting</a>,<a href=" ">copy(reproduction)</a>,<a href=" ">Roman art</a>></div>
                                        <div style={{borderBottom: "1px solid #dbdbdb" }}>PERMALINK <a href=" ">https://www.photo.rmn.fr/archive/R5N382233-2CO5S9PL8UMZ.html</a></div>
                                        <button style={{top: "382px",right: "0px", position: "absolute"}} onClick={this._handleCloseClick}>X</button>
                                        <p>
                                            <a href=" "><u>Add to lightbox: 'My First Sélection'</u></a>
                                        </p>
                                        <p>
                                            <a href=" "><u>Add to cart</u></a>
                                        </p>
                                        <p>
                                            <a href=" ">Print</a>
                                        </p>
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
