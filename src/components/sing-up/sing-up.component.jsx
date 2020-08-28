import React from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firbase.utils";
import {withRouter} from 'react-router-dom';
import './sing-up.style.scss'

class SingUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]: value})
    };

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert('password dont match');
            return;
        } else {
            try {
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {displayName});
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
                const {history} = this.props;
                history.push('/')
            } catch (error) {
                console.error(error)
            }
        }
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sing-up">
                <h2 className="title"> do not have a account</h2>
                <span>sing up with email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label={"display name"}
                        value={displayName}
                        handleChange={this.handleChange}
                        required={true}
                        type={'text'}
                        name='displayName'

                    />
                    <FormInput
                        value={email}
                        handleChange={this.handleChange}
                        required={true}
                        label={'Email'}
                        type={'email'}
                        name="email"
                    />
                    <FormInput
                        value={password}
                        handleChange={this.handleChange}
                        required={true}
                        label={'password'}
                        type={'password'}
                        name="password"
                    />
                    <FormInput
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required={true}
                        label={'confirm password'}
                        type={'password'}
                        name={"confirmPassword"}
                    />
                    <CustomButton type={"submit"}> Sing UP </CustomButton>

                </form>
            </div>
        );
    }
}

export default withRouter(SingUp)
