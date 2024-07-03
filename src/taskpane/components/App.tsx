import * as React from "react";
import { useEffect } from "react";
import { makeStyles } from "@fluentui/react-components";
import { extractDefinitions } from "../utils";
import { setDefinitions } from "../../store/reducers/Definitions";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    bgColor: "#FFF",
    padding: "16px",
  },
  tabContainer: {
    display: "flex",
    gap: "16px",
  },
  linkItem: {
    textDecoration: "none",
  },
});

const App = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  useEffect(() => {
    Word.run(async (context) => {
      const defs = await extractDefinitions(context);
      dispatch(setDefinitions(defs));
    });
  }, []);
  // The list items are static and won't change at runtime,
  // so this should be an ordinary const, not a part of state.

  return (
    <div className={styles.root}>
      <div className={styles.tabContainer}>
        <Link className={styles.linkItem} to={`definitions`}>
          <h3> All Definitions</h3>
        </Link>

        <Link className={styles.linkItem} to={`selected-definitions`}>
          <h3> Selected Definitions</h3>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
