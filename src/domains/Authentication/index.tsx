import React, { Component } from 'react';

import AuthSteps from "../../components/Auth";
import ScreenSession from "../../components/ScreenSession";
import { AuthStepsEnum } from "../../lib/auth";
// import CustomerService from "../../services/customer";
// import * as Styled from "./styles";
// import LoginStep from "./login";
// import PasswordRecoveryStep from "./pass-recovery";
// import ValidationStep from "./validation";
// import RegisterAccountStep from "./register";
// import HeaderNavigator from "../../components/header/headerNavigator";
// import {BackHandler, ToastAndroid} from "react-native";
// import Toaster from "../../components/toaster";
// import AuthService from "../../services/auth";
// import TopRightAssets from "../../assets/svg/leaves-horizontal";

interface Props {

}

interface State {
  isLoading: boolean,
  hasErrors: boolean,
  currentStep: AuthStepsEnum,
  inputData: {
    email: string,
    password: string,
    doubleCheckToken: string
  }
}

class AuthenticationScreen extends Component<Props, State> {

  public state: State = {
    isLoading: false,
    hasErrors: false,
    currentStep: AuthStepsEnum.SIGNIN,
    inputData: {
      email: '',
      password: '',
      doubleCheckToken: ''
    }
  };
  
  componentDidMount() {
    // AuthService.getAuthenticatedUser().then((item) => {
    //   console.log('[loaded profile]', item);
    //   if (item) anchorNavigate('main')
    // })
  }
  
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
  }
  
  componentWillUnmount() {}
  
  render() {
    return (
      <ScreenSession container>
        { this.getAuthStepElements() }
      </ScreenSession>
      // <Styled.KeyboardAvoidWrapper behavior={'height'} enabled={true}>
      // <Styled.Authentication>
      //   <Styled.HeaderWrapper>
      //     <HeaderNavigator overrideAction={() => anchorNavigate('home')} />
      //     <TopRightAssets />
      //   </Styled.HeaderWrapper>
      //   { this.getAuthStepElements() }
      // </Styled.Authentication>
    );
  }
  
  private stepHandler = step => {
    this.setState({
      ...this.state,
      currentStep: step,
    });
  };
  
  /**
   * Telas de etapas do registro / login
   */
  private getAuthStepElements = () => {
    switch (this.state.currentStep) {
      case AuthStepsEnum.SIGNIN:
        return <AuthSteps.AuthSignInStep
          stepHandler={this.stepHandler}
          
        />;
        // return <LoginStep
        //   changeStep={(step) => this.setState({currentStep: step})}
        //   setDoubleCheckToken={(token) => this.setState({
        //     inputData: {
        //       ...this.state.inputData,
        //       doubleCheckToken: token
        //     }
        //   })}
        //   email={this.state.inputData.email}
        //   emailHandler={(inputEmail) => this.setState({
        //     inputData: {
        //       ...this.state.inputData,
        //       email: inputEmail
        //     }
        //   })}
        //   password={this.state.inputData.password}
        //   passwordHandler={(inputPassword) => this.setState({
        //     inputData: {
        //       ...this.state.inputData,
        //       password: inputPassword
        //     }
        //   })}
        // />
      case AuthStepsEnum.VALIDATION:
        return <AuthSteps.AuthValidationStep
          stepHandler={this.stepHandler}
        />;
        // return <ValidationStep
        //   changeStep={(step) => this.setState({currentStep: step})}
        //   doubleCheckToken={this.state.inputData.doubleCheckToken}
        //   setAuthenticationToken={(token) => this.setState({
        //     inputData: {
        //       ...this.state.inputData,
        //       doubleCheckToken: token
        //     }
        //   })}
        //   email={this.state.inputData.email}
        //   password={this.state.inputData.password}
        // />
      case AuthStepsEnum.SIGNUP:
        return <AuthSteps.AuthSignUpStep
          stepHandler={this.stepHandler}
        />;
        // return <RegisterAccountStep changeStep={(step) => this.setState({currentStep: step})} />
      case AuthStepsEnum.RECOVERY:
        return <AuthSteps.AuthRecoveryStep
          stepHandler={this.stepHandler}
        />;
        // return <PasswordRecoveryStep changeStep={(step) => this.setState({currentStep: step})} />
      default:
        return <AuthSteps.AuthSignInStep
          stepHandler={this.stepHandler}
        />;
        // return <LoginStep
        //   changeStep={(step) => this.setState({currentStep: step})}
        //   setDoubleCheckToken={(token) => this.setState({
        //     inputData: {
        //       ...this.state.inputData,
        //       doubleCheckToken: token
        //     }
        //   })}
        //   email={this.state.inputData.email}
        //   emailHandler={(inputEmail) => this.setState({
        //     inputData: {
        //       ...this.state.inputData,
        //       email: inputEmail
        //     }
        //   })}
        //   password={this.state.inputData.password}
        //   passwordHandler={(inputPassword) => this.setState({
        //     inputData: {
        //       ...this.state.inputData,
        //       email: inputPassword
        //     }
        //   })}
        // />
    }
  };

}

export default AuthenticationScreen;
