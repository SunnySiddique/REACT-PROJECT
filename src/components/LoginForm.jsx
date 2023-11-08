import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
  return (
    <div>
      <Form style={{ height: "330px" }}>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
        />

        <TextInput type="password" placeholder="Enter password" icon="lock" />

        <Button type="submit">
          <span>Submit Now</span>
        </Button>

        <div className="info">
          Don't have an account?
          <a href="login.html">Signup</a> instead.
        </div>
      </Form>
    </div>
  );
}
