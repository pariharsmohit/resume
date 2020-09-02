import React from 'react';
import { Component } from 'react';

class PersonalProjects extends Component {
    constructor(props){
        super(props);
        this.state = {
            editMode: false,
            personalProjects: props.personalProjects
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.editForm = this.editForm.bind(this);
        this.updateObjective = this.updateObjective.bind(this);
    }

    handleEdit() {
        // this.props.dispatch(editObjective(this.state.objective));
        return;
    }

    editForm(){
        this.setState({
            editMode: !this.state.editMode
        })
    }

    updateObjective(event){
        this.setState({
            projects: JSON.parse(event.target.value),
            editMode: false
        })
    }

    render() {
        const items = this.state.personalProjects.map(el => {
            return (
                <li>
                    <section>
                        <ul>
                            <li>
                                <div className="label">Name:</div>
                                <div className="content">{el.name}</div>
                            </li>
                            <li>
                                <div className="label">Url:</div>
                                <div className="content"><a href="{el.url}" target="_blank">{el.url}</a></div>
                            </li>
                            <li>
                                <div className="label">Description:</div>
                                <div className="content">{el.description}</div>
                            </li> 
                        </ul>
                        </section>
                    </li>
            )
        })
    
        return (
            <section id="personalProject">
                <div className="div-header">
            <h2>Personal Projects</h2>
            <div className="edit-btn" onClick={this.editForm}><i className="fas fa-pencil-alt"></i></div>
            </div>
            {!this.state.editMode && <ul>
                {items}
            </ul>}
            {this.state.editMode && <textarea className="text-area" autoFocus onBlur={this.updateObjective} defaultValue={JSON.stringify(this.state.personalProjects, undefined, 4)} />}
            </section>
        )
    }
}

export default PersonalProjects;