import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { formUpdate } from '../actions';

class KinDetail extends Component {
    render() {
        return (
            <form >
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        value={this.props.kinname}
                        onChange={event => this.props.formUpdate({ prop: 'kinname', value: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Relation:</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        value={this.props.relation}
                        onChange={event => this.props.formUpdate({ prop: 'relation', value: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        value={this.props.address}
                        onChange={event => this.props.formUpdate({ prop: 'address', value: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>{this.props.name}</label>
                </div>
                <div className="form-group">
                    <label>{this.props.ic}</label>
                </div>
                <div className="form-group">
                    <label>{this.props.nationality}</label>
                </div>
                <Link to="/" className="btn btn-primary">Previous</Link>
                <Link to="/upload" className="btn btn-primary">Next</Link>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, ic, nationality, kinname, relation, address } = state.form;
    console.log(state);
    return { name, ic, nationality, kinname, relation, address };
}

export default connect(mapStateToProps, { formUpdate })(KinDetail);