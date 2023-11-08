import classes from "../styles/Illustration.module.css";
import signupImage from "../assets/image/signup.svg";
export default function Illustration() {
  return (
    <div className={classes.Illustration}>
      <img
        src={signupImage}
        alt="Signup"
        style={{ width: "75%", marginTop: "30px" }}
      />
    </div>
  );
}
