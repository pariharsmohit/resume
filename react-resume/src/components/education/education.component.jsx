import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            education: props.education
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
        const items = this.state.education.map(el => {
            return (
                <li>
                    <section>
                        <ul>
                            <li>
                                <div className="label">School:</div>
                                <div className="content">{el.school}</div>
                            </li>
                            <li>
                                <div className="label">Program:</div>
                                <div className="content">{el.program}</div>
                            </li>
                            <li>
                                <div className="label">Dates Attended:</div>
                                <div className="content">{el.startDate} - {el.endDate}</div>
                            </li>
                            <li>
                                <div className="label">Achievements:</div>
                                <div className="content">{el.achievements}</div>
                            </li>
                        </ul>
                    </section>
                </li>
            )
        });

        return (
            <section id="education">
                <div className="div-header">
                    <h2>Education</h2>
                    <div className="edit-btn" onClick={this.editForm}><i className="fas fa-pencil-alt"></i></div>
                </div>
                {!this.state.editMode &&
                    <ul>
                        {items}
                    </ul>}
                {this.state.editMode && <textarea className="text-area" autoFocus onBlur={this.updateObjective} defaultValue={JSON.stringify(this.state.education, undefined, 4)} />}
            </section>
        )
    }
};

export default Education;