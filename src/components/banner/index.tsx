import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { Button, Jumbotron } from "reactstrap";
import { FindFact } from "../../services";

const useStyles = makeStyles({
  button: {
    marginTop: "24px",
  },
});

const Banner: React.FC = () => {
  const [currentFact, setCurrentFact] = useState("");

  const classes = useStyles();

  const displayNewFact = async () => {
    const fact = await FindFact();
    setCurrentFact(fact);
  };

  useEffect(() => {
    displayNewFact();
  }, []);

  return (
    <Jumbotron>
      <h2 className="display-3">Did you know</h2>
      <hr className="my-2" />
      <p className="lead">{currentFact}</p>
      <Button color="info" className={classes.button} onClick={displayNewFact}>
        Cool!
      </Button>
    </Jumbotron>
  );
};

export default Banner;
