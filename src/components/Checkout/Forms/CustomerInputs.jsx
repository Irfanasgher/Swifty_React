import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../UI/Input/InputField';

const customerInputs = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <InputField
                    label={'Name'}
                    type={'text'}
                    placeholder={'Name'}
                    identifier={props.customerInfo.name}
                    changed={(event) => props.inputChanged(event, 'name')}/>
                </div>

                <div className="col-md-6 mb-3">
                    <InputField
                    label={'Phone Number'}
                    type={'tel'}
                    placeholder={'Phone'}
                    identifier={props.customerInfo.phone}
                    changed={(event) => props.inputChanged(event, 'phone')}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <InputField
                    label={'Postal Code'}
                    type={'tel'}
                    placeholder={'Postal Code'}
                    identifier={props.customerInfo.postal}
                    changed={(event) => props.inputChanged(event, 'postal')}/>
                </div>

                <div className="col-md-6 mb-3">
                    <InputField
                    label={'Unit Number'}
                    type={'tel'}
                    placeholder={'Unit Number (eg 2-49)'}
                    identifier={props.customerInfo.unit}
                    changed={(event) => props.inputChanged(event, 'unit')}/>
                </div>
            </div>

            {/* <div className="mb-3">
                <InputField
                    label={'Email'}
                    type={'email'}
                    placeholder={'you@example.com'}
                    identifier={props.customerInfo.email}
                    changed={(event) => props.inputChanged(event, 'email')}/>

            </div> */}
        </React.Fragment>
    )
};

customerInputs.propTypes = {
    inputChanged: PropTypes.func.isRequired,
    customerInfo: PropTypes.object.isRequired,
};

export default customerInputs;