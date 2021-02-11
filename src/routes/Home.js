import React, { useEffect, useState } from "react";
import { db } from "../Instance";
import {
  Form,
  TextArea,
  Modal,
  Image,
  Icon,
  Button,
  Popup,
  Message,
} from "semantic-ui-react";

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
      createdAt: Date.now(),
      creator: userObj.uid,
      displayName: userName,
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
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
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

      <div style={{ paddingTop: 15, float: "right" }}>
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
      </div>
    </div>
  );
};

export default Home;
