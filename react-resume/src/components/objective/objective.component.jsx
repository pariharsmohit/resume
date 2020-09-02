import React from 'react';
import { editObjective } from './../../actions'
import { Component } from 'react';
import './objective.component.scss';

class Objective extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            objective: props.objective
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.editForm = this.editForm.bind(this);
        this.updateObjective = this.updateObjective.bind(this);
    }

    handleEdit() {
        this.props.dispatch(editObjective(this.state.objective));
        return;
    }

    editForm() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    updateObjective(event) {
        this.setState({
            objective: event.target.value,
            editMode: false
        })
    }

    render() {
        return (
            <section id="objective">
                <div className="div-header">
                    <h2>Objective</h2>
                    <div className="edit-btn" onClick={this.editForm}><i className="fas fa-pencil-alt"></i></div>
                </div>
                {this.state.editMode && <textarea className="text-area" autoFocus onBlur={this.updateObjective} defaultValue={this.state.objective} />}
                {!this.state.editMode && <div className="paraContent">{this.state.objective}</div>}
            </section>
        )
    }

}

export default Objective;