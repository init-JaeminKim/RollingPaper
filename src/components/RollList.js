import React, { useState } from "react";
import { db } from "../Instance";
import {
  Card,
  Image,
  Button,
  TextArea,
  Icon,
  Modal,
  Header,
} from "semantic-ui-react";

const RollList = ({ rollObj, isOwner }) => {
  const [editable, setEditable] = useState(false);
  const [originText, setOriginText] = useState(rollObj.text);
  const [open, setOpen] = React.useState(false);

  const onDeleteClick = async () => {
    db.collection("rolls").doc(`${rollObj.id}`).delete();
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setOriginText(value);
  };

  const onUpdateClick = async (event) => {
    event.preventDefault();

    await db.doc(`rolls/${rollObj.id}`).update({ text: originText });

    setEditable(false);
  };

  const onEditClick = () => {
    setEditable((prev) => !prev);
    setOriginText(rollObj.text);
  };

  return (
    <>
      {editable ? (
        <>
          <Card.Group>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src={`${rollObj.photoUrl}`}
                  circular
                />
                <Card.Header>{rollObj.displayName}</Card.Header>
                <Card.Meta>{rollObj.createdAt}</Card.Meta>
                <Card.Description>
                  <TextArea
                    rows="5"
                    style={{
                      width: 260,
                      height: 50,
                      border: "none",
                      resize: "none",
                      outline: 0,
                    }}
                    type="text"
                    placeholder="Edit text"
                    value={originText}
                    onChange={onChange}
                    maxLength={280}
                    required
                  ></TextArea>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                {isOwner && (
                  <div className="ui two buttons">
                    <Button onClick={onEditClick}>cancel</Button>
                    <Button
                      onClick={onUpdateClick}
                      value="update"
                      color="green"
                    >
                      update
                    </Button>
                  </div>
                )}
              </Card.Content>
            </Card>
          </Card.Group>
          {/* <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit text"
              value={originText}
              onChange={onChange}
              maxLength={280}
              required
            ></input>
            <Button onClick={onEditClick}>cancel</Button>
            <Button type="submit" value="update" color="green">update</Button>
          </form> */}
        </>
      ) : (
        <>
          <Card.Group>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src={`${rollObj.photoUrl}`}
                  circular
                />
                <Card.Header>{rollObj.displayName}</Card.Header>
                <Card.Meta>{rollObj.createdAt}</Card.Meta>
                <Card.Description content={rollObj.text}></Card.Description>
              </Card.Content>
              <Card.Content extra>
                {isOwner && (
                  <div className="ui two buttons">
                    <Modal
                      basic
                      onClose={() => setOpen(false)}
                      onOpen={() => setOpen(true)}
                      open={open}
                      size="small"
                      trigger={
                        <Button basic color="red">
                          Delete
                        </Button>
                      }
                    >
                      <Header icon>
                        <Icon name="trash alternate" />
                        Delete Messages
                      </Header>
                      <Modal.Content>
                        <p style={{ textAlign: "center", fontSize: 15 }}>
                          "Are you sure you want to permanently remove this
                          item?"
                        </p>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button
                          basic
                          color="red"
                          inverted
                          onClick={() => setOpen(false)}
                        >
                          <Icon name="remove" /> No
                        </Button>
                        <Button color="green" inverted onClick={onDeleteClick}>
                          <Icon name="checkmark" /> Yes
                        </Button>
                      </Modal.Actions>
                    </Modal>
                    <Button onClick={onEditClick} basic color="yellow">
                      Edit
                    </Button>
                  </div>
                )}
              </Card.Content>
            </Card>
          </Card.Group>

          {/* <h4>{rollObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onEditClick}>edit</button>
              <button onClick={onDeleteClick}>delete</button>
            </>
          )} */}
        </>
      )}
    </>
  );
};

export default RollList;
