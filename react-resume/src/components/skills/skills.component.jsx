import React from 'react';
import { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            skills: props.skills
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.editForm = this.editForm.bind(this);
        this.updateObjective = this.updateObjective.bind(this);
    }

    handleEdit() {
        // this.props.dispatch(editObjective(this.state.objective));
        return;
    }

    editForm() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    updateObjective(event) {
        this.setState({
            skills: JSON.parse(event.target.value),
            editMode: false
        })
    }

    render() {
        const items = this.state.skills.map(el => {
            return (
                <li className="double">{el}</li>
            )
        });

        return (
            <section>
                <div className="div-header">
                    <h2><strong>Skills:</strong></h2>
                    <div className="edit-btn" onClick={this.editForm}><i className="fas fa-pencil-alt"></i></div>
                </div>
                {!this.state.editMode && <ul className="double">
                    {items}
                </ul>}
                {this.state.editMode && <textarea className="text-area" autoFocus onBlur={this.updateObjective} defaultValue={JSON.stringify(this.state.skills, undefined, 4)} />}
            </section>
        )
    }
};

export default Skills;