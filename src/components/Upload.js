import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { uploadRequest, formUpdate } from '../actions';

class Upload extends Component {
    handleUploadFile(event) {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post('/files', data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Upload files</label>
                    <div style={{ height: 100, width: 100 }}>
                        <input type="file" onChange={this.handleUploadFile} />
                    </div>
                </div>
            </form>
        );
    }
}

export default connect(null, ({ uploadRequest }, { formUpdate }))(Upload);
