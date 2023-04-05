import { useForm, SubmitHandler } from "react-hook-form";
import * as Tabs from "@radix-ui/react-tabs";
import styledSign from "@/styles/Sign.module.css";

import SignIn from "@/pages/_forms/SignIn";
import SignUp from "@/pages/_forms/SignUp";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormRegister {
  firstName: String;
  gender: GenderEnum;
}

interface IFormLogin {
  username: String;
  password: String;
}

export default function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>();
  console.log("register", register);

  const createUser: SubmitHandler<IFormRegister> = (data) => {
    console.log("DEU SUBMIT");
    console.log("data", data);
  };

  return (
    <div className={"page"}>
      <h1 className={"upper-headline title-gradient"}>Gestão ISA</h1>

      <Tabs.Root
        className={[
          "TabsRoot",
          styledSign.card,
          styledSign["shadow-primary"],
        ].join(" ")}
        defaultValue="sign-in"
      >
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="sign-in">
            Login
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="sign-up">
            Cadastre-se
          </Tabs.Trigger>
        </Tabs.List>

        <SignIn />
        <SignUp />
      </Tabs.Root>
    </div>
  );
}
