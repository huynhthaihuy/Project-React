import React from "react";
import firebase from "../../firebase";
import { connect } from 'react-redux';
// prettier-ignore
import { Grid, Header, Icon, Dropdown, Image, Modal, Input, Button } from "semantic-ui-react";

class UserPanel extends React.Component {
    state = {
      users: this.props.currentUser,
        // modal: false,
        // previewImage: "",
        // croppedImage: "",
        // blob: null,
        // uploadedCroppedImage: "",
        // storageRef: firebase.storage().ref(),
        // userRef: firebase.auth().currentUser,
        // usersRef: firebase.database().ref("users"),
        // metadata: {
        //   contentType: "image/jpeg"
      };
    dropdownOptions = () => [
        {
          key: "user",
          text: (
            <span>
              Signed in as <strong>{this.state.user && this.state.user.displayName}</strong>
            </span>
          ),
          disabled: true
        },
        {
          key: "avatar",
          text: <span>Change Avatar</span>
        },
        {
          key: "signout",
          text: <span onClick={this.handleSignout}>Sign Out</span>
        }
      ];
      handleSignout = () => {
        firebase
          .auth()
          .signOut()
          .then(() => console.log("signed out!"));
      };
 render(){
     return(
         <Grid style={{background: '#4c3c4c'}}>
             <Grid.Column>
             <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>CellPhone</Header.Content>
            </Header>

            {/* User Dropdown  */}
            <Header style={{ padding: "0.25em" }} as="h4" inverted>
              <Dropdown
                trigger={
                  <span>User{this.state.user && this.state.user.displayName}
                  </span>
                }
                options={this.dropdownOptions()}
              />
            </Header>
          </Grid.Row>
             </Grid.Column>
         </Grid>
     );
 } 
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
export default connect()(UserPanel);
