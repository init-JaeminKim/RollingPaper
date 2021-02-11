import React, { useState } from "react";
import { db } from "../Instance";
import { Card, Image, Button, TextArea, Grid } from "semantic-ui-react";

const RollList = ({ userObj, rollObj, isOwner }) => {
  const [editable, setEditable] = useState(false);
  const [originText, setOriginText] = useState(rollObj.text);

  const onDeleteClick = async () => {
    const isOk = window.confirm("Are you sure you want to permanently remove this item?");
    if (isOk) {
      await db.collection("rolls").doc(`${rollObj.id}`).delete();
    }
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
                  src={`${userObj.photoUrl}`}
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
                  src={`${userObj.photoUrl}`}
                  circular
                />
                <Card.Header>{rollObj.displayName}</Card.Header>
                <Card.Meta>{rollObj.createdAt}</Card.Meta>
                <Card.Description content={rollObj.text}></Card.Description>
              </Card.Content>
              <Card.Content extra>
                {isOwner && (
                  <div className="ui two buttons">
                    <Button onClick={onDeleteClick} basic color="red">
                      Delete
                    </Button>
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
