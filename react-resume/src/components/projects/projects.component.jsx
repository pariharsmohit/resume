import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            projects: props.projects
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
            projects: JSON.parse(event.target.value),
            editMode: false
        })
    }

    render() {
        const items = this.state.projects.map(el => {
            return (
                <li>
                    <section>
                        <ul>
                            <li>
                                <div className="label">Title:</div>
                                <div className="content">{el.title}</div>
                            </li>
                            <li>
                                <div className="label">Technologies:</div>
                                <div className="content">{el.technologies}</div>
                            </li>
                            <li>
                                <div className="label">Description:</div>
                                <div className="content">{el.description}</div>
                            </li>
                        </ul>
                    </section>
                </li>
            )
        });

        return (
            <section id="projects">
                <div className="div-header">
                    <h2>Projects</h2>
                    <div className="edit-btn" onClick={this.editForm}><i className="fas fa-pencil-alt"></i></div>
                </div>
                {!this.state.editMode && <ul>
                    {items}
                </ul>}
                {this.state.editMode && <textarea className="text-area" autoFocus onBlur={this.updateObjective} defaultValue={JSON.stringify(this.state.projects, undefined, 4)} />}
            </section>
        )
    }
}

export default Projects;
