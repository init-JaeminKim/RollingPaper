import React, { useEffect, useState } from "react";
import { db } from "../Instance";
import {
  Form,
  TextArea,
  Image,
  Icon,
  Button,
  Popup,
  Message,
  Grid,
} from "semantic-ui-react";
import moment from "moment";

const Home = ({ userObj }) => {
  const [roll, setRoll] = useState("");
  const [userName, SetUserName] = useState(userObj.displayName);
  const [secret, setSecret] = useState(false);
  const [onMsg, setMsg] = useState(false);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setRoll(value);
  };

  const onCompleteClick = async (event) => {
    event.preventDefault();

    const rollObj = {
      text: roll,
      createdAt: moment().format("MMM Do YY"),
      creator: userObj.uid,
      displayName: userName,
      photoUrl: userObj.photoUrl,
    };

    await db.collection("rolls").add(rollObj);

    setRoll("");

    setMsg(true);
    setTimeout(() => {
      setMsg(false);
    }, 5000);
  };

  const secretToggle = () => {
    setSecret((prev) => !prev);

    if (secret === false) {
      SetUserName("Anonymous");
    } else if (secret === true) {
      SetUserName(userObj.displayName);
    }
  };

  return (
    <div style={{ paddingTop: "10%" }}>
      <Grid columns={3} centered>
        <Grid.Column>
          {onMsg && (
            <Message
              style={{ marginTop: 100 }}
              icon="check circle outline"
              color="green"
              header="Thank you!"
              content="Your message has been posted"
            />
          )}
          <Image
            src={`${userObj.photoUrl}`}
            avatar
            spaced="right"
            bordered
            size="mini"
          ></Image>
          <span style={{ color: "white", fontSize: 17 }}>
            {userObj.displayName}
          </span>

          <Form style={{ paddingTop: 15 }}>
            <TextArea
              style={{
                height: 350,
                width: 400,
                fontSize: 17,
                backgroundColor: "transparent",
                borderWidth: 5,
                resize: "none",
              }}
              type="text"
              value={roll}
              placeholder="Any word"
              onChange={onChange}
              maxLength={280}
              required
            />
          </Form>
          <Grid.Column style={{ paddingTop: 15 }}>
            <Popup
              content={secret ? "Show yourself" : "Hide yourself"}
              trigger={
                <Button
                  animated="fade"
                  toggle
                  active={secret}
                  onClick={secretToggle}
                >
                  <Button.Content visible>
                    <Icon name={secret ? "lock" : "lock open"}></Icon>
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name={secret ? "lock" : "lock open"}></Icon>
                  </Button.Content>
                </Button>
              }
            ></Popup>

            <Button
              disabled={roll ? false : true}
              onClick={onCompleteClick}
              color="green"
            >
              Complete
            </Button>
          </Grid.Column>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Home;
