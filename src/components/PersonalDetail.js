import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { formUpdate } from '../actions';

import Working from './Working';

class PersonalDetail extends Component {
    renderWorkingForm(){
        if(this.props.working) {
            return (
                <Working />
                /*
                <div className="form-group">
                    <label>Tax Number:</label>
                    <input 
                        type="number" 
                        value={this.props.tax} 
                        onChange={event => this.props.formUpdate({ prop: 'tax', value: event.target.value })} 
                    />
                </div>
                */
            );
        }

        return;
    }

    render() {
        return (
            <form >
                <div className="form-group">
                    <label>Fullname:</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        value={this.props.name}
                        onChange={event => this.props.formUpdate({ prop: 'name', value: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>IC:</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        value={this.props.ic}
                        onChange={event => this.props.formUpdate({ prop: 'ic', value: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Nationality:</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        value={this.props.nationality}
                        onChange={event => this.props.formUpdate({ prop: 'nationality', value: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Are you currently working:</label>
                    <button onClick={() => this.props.formUpdate({ prop: 'working', value: true })}>Yes</button>
                    <button onClick={() => this.prop.formUpdate({ prop: 'working', value: false })}>No</button>
                </div>
                {this.renderWorkingForm}
                <Link to="/kin" className="btn btn-primary">Next</Link>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, ic, nationality, working, tax } = state.form;

    return { name, ic, nationality, working, tax };
}

export default connect(mapStateToProps, { formUpdate })(PersonalDetail);
