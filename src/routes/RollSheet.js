import React, { useEffect, useState } from "react";
import { db } from "../Instance";
import RollList from "../components/RollList";
import { Button, Container, Grid, Icon } from "semantic-ui-react";

const RollSheet = ({ userObj }) => {
  const [rolls, setRolls] = useState([]);
  const [count, setCount] = useState(8);

  useEffect(() => {
    db.collection("rolls")
      .orderBy("createdAt", "desc")
      .limit(count)
      .onSnapshot((snap) => {
        const arrRoll = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRolls(arrRoll);
      });
  }, []);

  const numOfContents = async () => {
    const firstVisible = db
      .collection("rolls")
      .orderBy("createdAt", "desc")
      .limit(count);

    await firstVisible.get().then((snap) => {

      db.collection("rolls")
        .orderBy("createdAt", "desc")
        .limit(count * 2)
        .onSnapshot((snap) => {
          const arrRoll = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setRolls(arrRoll);
        });
      setCount(count * 2);
    });
  };

  return (
    <>
      <Container>
        <Grid columns={4} doubling stackable style={{ paddingTop: 100 }}>
          {rolls.map((roll) => (
            <Grid.Column key={roll.id}>
              <RollList
                key={roll.id}
                rollObj={roll}
                isOwner={userObj.uid === roll.creator}
                userObj={userObj}
              />
            </Grid.Column>
          ))}
        </Grid>
        <Grid columns={8} doubling stackable centered>
          <Grid.Column>
            <Button
              onClick={numOfContents}
              animated="vertical"
              circular
              color="blue"
            >
              <Button.Content visible>More</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow circle down"/>
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default RollSheet;
