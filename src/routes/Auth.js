import React from "react";
import { authService, newFirebase } from "../Instance";
import "semantic-ui-css/semantic.min.css";
import { Button, Icon, Header, Image, Grid } from "semantic-ui-react";
import "../css/Auth.css";

const Auth = () => {
  const onLoginClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;

    if (name === "google") {
      provider = new newFirebase.auth.GoogleAuthProvider();
    } else if (name === "facebook") {
      provider = new newFirebase.auth.FacebookAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  return (
    <div style={{ paddingTop: "20%"}}>
      <Grid
        columns="1"
        stackable
        centered
        verticalAlign="middle"
      >
        <Grid.Column computer="4" mobile="4" widescreen="4">
          <Header as="h2" icon textAlign="center" size="huge" color="yellow">
            <Icon name="graduation cap" />
            <Header.Content>Start with</Header.Content>
          </Header>

          <Button.Group size="huge">
            <Button name="google" onClick={onLoginClick} color="google plus">
              <Icon name="google" /> Google
            </Button>
            <Button.Or />
            <Button name="facebook" onClick={onLoginClick} color="facebook">
              <Icon name="facebook" /> Facebook
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Auth;
