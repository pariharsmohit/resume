import React, { Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            experience: props.experience
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
        const items = this.state.experience.map(el => {
            return (
                <li>
                    <section>
                        <ul>
                            <li>
                                <div className="label">Name:</div>
                                <div className="content">{el.name}</div>
                            </li>
                            <li>
                                <div className="label">Title:</div>
                                <div className="content">{el.title}</div>
                            </li>
                            <li>
                                <div className="label">Tenure:</div>
                                <div className="content">{el.startDate} - {el.endDate}</div>
                            </li>
                            <li>
                                <div className="label">Url:</div>
                                <div className="content">{el.url}</div>
                            </li>
                        </ul>
                    </section>
                </li>
            )
        });

        return (
            <section id="experience">
                <div className="div-header">
                    <h2>Experience</h2>
                    <div className="edit-btn" onClick={this.editForm}><i className="fas fa-pencil-alt"></i></div>
                </div>
                {!this.state.editMode &&
                    <ul>
                        {items}
                    </ul>}
                {this.state.editMode && <textarea className="text-area" autoFocus onBlur={this.updateObjective} defaultValue={JSON.stringify(this.state.experience, undefined, 4)} />}
            </section>
        )
    }
};

export default Experience;