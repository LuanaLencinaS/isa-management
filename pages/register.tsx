import { useForm, SubmitHandler } from "react-hook-form";
import * as Tabs from "@radix-ui/react-tabs";
import styledSign from "@/styles/Sign.module.css";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  console.log("register", register);
  console.log("handleSubmit", handleSubmit);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("DEU SUBMIT");
    console.log("data", data);
  };

  return (
    <div className={"page"}>
      <h1>Registro Page</h1>
      <p>Learn more Register us!</p>

      <Tabs.Root
        className={[
          "TabsRoot",
          styledSign.card,
          styledSign["shadow-primary"],
        ].join(" ")}
        defaultValue="tab1"
      >
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Cadastre-se
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Login
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="TabsContent" value="tab1">
          <p className="Text">
            Make changes to your account here. Click save when youre done.
          </p>

          <form>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="Input"
                id="firstName"
                type="text"
                {...register("firstName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName?.type === "required" && (
                <p role="alert">First name is required</p>
              )}
            </fieldset>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="gender">
                Gender Selection
              </label>
              <select id="gender" {...register("gender")}>
                <option value="female">Feminino</option>
                <option value="male">Masculino</option>
                <option value="other">Outro</option>
              </select>
            </fieldset>
            <label></label>

            {/* <input type="submit" /> */}
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "flex-end",
              }}
            >
              <button className="Button green" onClick={handleSubmit(onSubmit)}>
                Enviar
              </button>
            </div>
          </form>
        </Tabs.Content>

        <Tabs.Content className="TabsContent" value="tab2">
          <p className="Text">
            Change your password here. After saving, be logged out.
          </p>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="currentPassword">
              Current password
            </label>
            <input className="Input" id="currentPassword" type="password" />
          </fieldset>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="newPassword">
              New password
            </label>
            <input className="Input" id="newPassword" type="password" />
          </fieldset>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input className="Input" id="confirmPassword" type="password" />
          </fieldset>

          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "flex-end",
            }}
          >
            <button className="Button green">Change password</button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
