import Link from "next/link";
import classes from "./Button.module.css";
const Button = (props) => {
  if (props.link) {
    return (
      <Link className={classes.btn} href={props.link}>
        {props.children}
      </Link>
    );
  }
  return <button onClick={props.click}>{props.children}</button>;
};
export default Button;
