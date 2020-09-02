import React, { Component } from 'react';
import { editObjective } from './../../actions';

class Summary extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            editMode: false,
            executiveSummary: props.summary
        }


        this.handleEdit = this.handleEdit.bind(this);
        this.editForm = this.editForm.bind(this);
        this.updateObjective = this.updateObjective.bind(this);
    }

    handleEdit() {
        // this.props.dispatch(editObjective(this.state.summary));
        return;
    }

    editForm(){
        this.setState({
            editMode: !this.state.editMode
        })
    }

    updateObjective(event){
        this.setState({
            executiveSummary: event.target.value,
            editMode: false
        })
    }

    render() {
        return (
            <section id="summary">
                <div className="div-header">
                <h2>Executive Summary</h2>
                <div className="edit-btn" onClick={this.editForm}><i className="fas fa-pencil-alt"></i></div>
                </div>
                {this.state.editMode && <textarea className="text-area" autoFocus onBlur={this.updateObjective} defaultValue={this.state.executiveSummary} />}
                {!this.state.editMode && <div className="paraContent">{this.state.executiveSummary}</div>}
            </section>
        )
    }
}

export default Summary;