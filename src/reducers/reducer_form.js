import { FORM_UPDATE, UPLOAD_FILE } from '../actions';

const INITIAL_STATE = {
    name: '',
    ic: '',
    nationality: '',
    kinname: '',
    relation: '',
    address: '',
    working: false,
    tax: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    
    }
}