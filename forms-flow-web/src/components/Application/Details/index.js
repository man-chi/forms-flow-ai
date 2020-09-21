import React from 'react'
import LoadingOverlay from 'react-loading-overlay';

import ViewApplication from './ViewApplication'
import { connect } from 'react-redux';


const Details = (props) => {
    return (
        <LoadingOverlay active={props.isApplicationUpdating} spinner text='Loading...'>
            <div className="row" style={{ marginTop: '26.5px', fontWeight: "500px" }}>
                <div className="col-md-6">
                    <ViewApplication />
                </div>
            </div>
        </LoadingOverlay>
    );
}

const mapStateToProps = (state) =>{
    return{
        isApplicationUpdating: state.applications.isApplicationUpdating
    }
}

export default connect(mapStateToProps)(Details);
