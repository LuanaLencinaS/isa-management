import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import Head from "next/head";
import * as Tabs from "@radix-ui/react-tabs";

import SignIn from "@/pages/_forms/SignIn";
import SignUp from "@/pages/_forms/SignUp";
import { GenderEnum } from "@/utils/GenderEnum";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface IFormRegister {
  name: string;
  gender: GenderEnum;
  email: string;
  password: string;
  birthdate: string;
  registerNumber: string;
}

interface IFormLogin {
  email: string;
  password: string;
}

export default function Registro() {
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>();

  const createUser: SubmitHandler<IFormRegister> = (data) => {
    console.log("DEU SUBMIT");
    console.log("data", data);
  };

  return (
    <>
      <Head>
        <title>ISA Gestão</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"page"}>
        <h1 className={"upper-headline title-gradient"}>Gestão ISA</h1>

        <Tabs.Root
          className={["TabsRoot", "card", "shadow-primary"].join(" ")}
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

          <SignIn onGoToClick={goTo} />
          <SignUp />
        </Tabs.Root>
      </main>
    </>
  );
}
