import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { store } from '../store';

const ErrorMessage = ({error}) => 
     (<Fragment>{
    error.message && <div className="error">{error.message}</div>
    }</Fragment>);

export default connect(store => ({error: store.error}))(ErrorMessage);
