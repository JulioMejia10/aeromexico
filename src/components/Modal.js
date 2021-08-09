
import React, { Component } from 'react'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      id: 0,
      name: '',
      dateOfBirth: '',
      eyeColour: '',
      hairColour: '',
      gender: '',
      posicion: ''
    }
  }
  handleClick = () => {
    this.props.handleClose('close');
  }
  handleClickSubmit = () => {
    this.props.handleSaveContact(this.state);
    this.props.handleClose('close');
  }

  handleChange = (event) => {
    let myId = Math.floor(Math.random() * 100);
    const { name, type, value, checked } = event.target;
    let FinalValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: FinalValue,
      id: myId
    });
  }

  render() {
    return (
      <div className={`modal ${this.props.modal ? 'appear' : ''}`} >
        <form>
          <div className="container-title">
            <h4>Agregar</h4>
            <span onClick={this.handleClick}>x</span>
          </div>
          <div className="container-input">
            <div className="first">
              <label>Nombre</label>
              <input className="input" onChange={this.handleChange} value={this.name} name="name" placeholder="name" />
              <label>Cumpleaños</label>
              <input className="input" onChange={this.handleChange} value={this.dateOfBirth} name="dateOfBirth" placeholder="dateOfBirth" />
              <div className="options" onChange={this.handleChange}>
                <p>Posicion</p>
                <input type="radio" value="estudiante" name="posicion" /> estudiante
                <input type="radio" value="staff" name="posicion" /> staff
              </div>
            </div>
            <div className="second">
              <label>Color de ojos</label>
              <input className="input" onChange={this.handleChange} value={this.eyeColour} name="eyeColour" placeholder="eyeColour" />
              <label>Color de pelo</label>
              <input className="input" onChange={this.handleChange} value={this.hairColour} name="hairColour" placeholder="color de pelo" />
              <div className="options" onChange={this.handleChange}>
                <p>Genero</p>
                <input type="radio" value="hombre" name="gender" /> hombre
                <input type="radio" value="mujer" name="gender" /> mujer
              </div>
            </div>
          </div>
          <div className="btn" onClick={this.handleClickSubmit}>Guardar</div>
        </form>
      </div>
    )
  }
}
export default Modal;

