import { useForm, SubmitHandler } from "react-hook-form";
import * as Tabs from "@radix-ui/react-tabs";
import * as Form from "@radix-ui/react-form";
import styledSign from "@/styles/Sign.module.css";

interface IFormLogin {
  username: String;
  password: String;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  const loginUser: SubmitHandler<IFormLogin> = (data) => {
    console.log("DEU  LOGIN");
    console.log("data", data);
  };

  return (
    <Tabs.Content className="TabsContent" value="sign-in">
      <p className="Text">
        Faça login e comece a gerenciar seus pacientes, planos e colaboradores!
      </p>

      <Form.Root className="FormRoot">
        <Form.Field className="FormField" name="username">
          <div>
            <Form.Label className="FormLabel">Login</Form.Label>

            {errors.username?.type === "required" && (
              <Form.Message className="FormMessage" match="valueMissing">
                Login é obrigatório
              </Form.Message>
            )}
          </div>
          <Form.Control asChild>
            <input
              className="Input"
              type="email"
              required
              {...register("username", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              aria-invalid={errors.username ? "true" : "false"}
            />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <button
            className="Button green"
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "flex-end",
            }}
            onClick={handleSubmit(loginUser)}
          >
            Entrar
          </button>
        </Form.Submit>
      </Form.Root>

      {/* <form>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Login
          </label>
          <input
            className="Input"
            id="username"
            type="text"
            {...register("username", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username?.type === "required" && (
            <p role="alert">Login é obrigatório</p>
          )}
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="password">
            Senha
          </label>
          <input
            className="Input"
            id="password"
            type="password"
            {...register("password", {
              required: true,
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && (
            <p role="alert">Insira sua senha</p>
          )}
        </fieldset>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            justifyContent: "flex-end",
          }}
        >
          <button
            className="Button green"
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "flex-end",
            }}
            onClick={handleSubmit(loginUser)}
          >
            Entrar
          </button>
        </div>
      </form> */}
    </Tabs.Content>
  );
}
