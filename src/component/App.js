import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import { connect } from "react-redux";
import Footer from './Footer';
import Body from './Body';
import { Grid } from 'semantic-ui-react';
import SidePanel from './Panel/SidePanel';
const App = ({ currentUser }) => {
    return (
      <div >
          {/* <Grid.Column>
            <SidePanel currentUser={currentUser}></SidePanel>
          </Grid.Column> */}
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  // currentChannel: state.channel.currentChannel,
  // isPrivateChannel: state.channel.isPrivateChannel,
  // userPosts: state.channel.userPosts,
  // primaryColor: state.colors.primaryColor,
  // secondaryColor: state.colors.secondaryColor
});
export default connect(mapStateToProps)(App);
