import React from 'react';

class Step1 extends React.Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }

        return(
        <div className="signup-form-container">
        {this.renderErrors()}
            <form onSubmit={this.props.handleSubmit}>
                <div className="signup-form-input">
                    <label className="signup-email">
                    <div className="signup-email-title">EMAIL ADDRESS</div>
                    <input
                        type="text"
                        value={this.props.email}
                        onChange={this.update("email")}
                        placeholder="Enter Email"
                    />
                    </label>
                    <label className="signup-password">
                    <div className="signup-password-title">PASSWORD</div>
                    <input
                        type="password"
                        value={this.props.password}
                        onChange={this.update("password")}
                        placeholder="Enter Password"
                    />
                    </label>
                    <label className="signup-password">
                    <div className="signup-password-title">VERIFY PASSWORD</div>
                    <input
                        type="password"
                        value={this.props.password2}
                        onChange={this.update("password")}
                        placeholder="Re-Enter Password"
                    />
                    </label>
                </div>
            </form>
        </div>
        )
    }
}