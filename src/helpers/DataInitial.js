import React, { Component } from 'react';

export default function DataInitial(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = { students: [], staff: [], compañeros: [] }
    }

    componentDidMount() {
      this.requestInitial();
    }

    requestInitial = () => {
      fetch('http://localhost:3004/students')
        .then(response => response.json())
        .then(data => {
          const addColorIcon = this.addColor(data);
          this.setState({ students: addColorIcon })
        });

      fetch('http://localhost:3004/staff')
        .then(response => response.json())
        .then(data => {
          const addColorIcon = this.addColor(data);
          this.setState({ staff: addColorIcon })
        });

      fetch('http://localhost:3004/amigos')
        .then(response => response.json())
        .then(data => {
          const addColorIcon = this.addColor(data);
          this.setState({ compañeros: addColorIcon })
        });
    }

    addColor(data) {
      return data.map(item => {
        item.colorIcon = 'icon-initial';
        return item;
      })
    }

    render() {
      return <WrappedComponent compañeros={this.state.compañeros} students={this.state.students} staff={this.state.staff} {...this.props} />
    }
  }
}