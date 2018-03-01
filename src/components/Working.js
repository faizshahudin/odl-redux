import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formUpdate } from '../actions';

class Working extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Tax Number:</label>
                    <input type="number"  value={this.props.tax} onChange={event => this.props.formUpdate({ 
                        prop: 'tax', value: event.target.value
                    })} />
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    const { tax } = state.form;

    return { tax };
}

export default connect(mapStateToProps, { formUpdate })(Working);