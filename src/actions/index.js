import axios from 'axios';

export const FORM_UPDATE = 'form_update';
export const UPLOAD_FILE = 'upload_file';

export const formUpdate = ({ prop, value }) => {
    console.log({ prop, value });
    return {
        type: FORM_UPDATE,
        payload: { prop, value }
    };
};

export const uploadRequest = (data) => {
    return (dispatch) => {
        axios.post('/files', data)
            .then(response => console.log(response, data))
            .catch(error => console.log(error));
    };
};
