import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/users/usersContainer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeApp} from './Redux/app-reducer';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import Preloader from "./components/Common/Preloader/Preloader";
import store from './Redux/redux-store'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar
                    sidebar={this.props.appState.sidebar}
                />
                <div className="app-wrapper-content">
                    <Suspense fallback={<div>loading...</div>}>
                        <Switch>
                            <Route path="/profile/:userId?" component={ProfileContainer}/>
                            <Route path="/dialogs" component={DialogsContainer}/>
                            <Route path="/users" component={UsersContainer}/>
                            <Route path="/login" component={Login}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

const AppConnect = compose(withRouter, connect(mapStateToProps,
    {
        initializeApp
    }
))(App);

const AppContainer = () => {
    return (
        <Router>
            <Provider store={store}>
                <AppConnect appState={store.getState.call(store)}/>
            </Provider>
        </Router>
    )
}
export default AppContainer