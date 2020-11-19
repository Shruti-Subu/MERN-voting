import React,{Fragment} from 'react';
import {connect} from 'react-redux';

const ErrorMessage=({error}) =>(
    <Fragment>{
        error && <div className="error">{error.message}</div>
        }</Fragment>
);

export default connect(store =>({error:store.error}))(ErrorMessage);