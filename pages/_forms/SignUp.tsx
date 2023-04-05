import { useForm, SubmitHandler } from "react-hook-form";
import * as Tabs from "@radix-ui/react-tabs";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormRegister {
  firstName: String;
  lastName: String;
  gender: GenderEnum;
  birthdate: String;
  companyRegistry: String;
  tradeName: String;
}

export default function SignUp() {
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
    <Tabs.Content className="TabsContent" value="sign-up">
      <p className="Text">Registre-se como um Gestor na plataforma.</p>

      <form>
        {/* <form createUser={handleSubmit(createUser)}> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="firstName">
              Primeiro nome
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
              <p role="alert">Informe o primeiro nome</p>
            )}
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="lastName">
              Sobrenome
            </label>
            <input
              className="Input"
              id="lastName"
              type="text"
              {...register("lastName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName?.type === "required" && (
              <p role="alert">Informe o sobrenome</p>
            )}
          </fieldset>
        </div>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor=" ">
            Data de nascimento
          </label>
          <input
            className="Input"
            id="birthdate"
            type="date"
            {...register("birthdate", {
              required: true,
            })}
            aria-invalid={errors.birthdate ? "true" : "false"}
          />
          {errors.birthdate?.type === "required" && (
            <p role="alert">Informe a data de nascimento</p>
          )}
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="gender">
            Gender Selection
          </label>
          <select className="Input" id="gender" {...register("gender")}>
            <option value="female">Feminino</option>
            <option value="male">Masculino</option>
            <option value="other">Outro</option>
          </select>
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor=" ">
            CNPJ
          </label>
          <input
            className="Input"
            id="companyRegistry"
            type="text"
            {...register("companyRegistry", {
              required: true,
              maxLength: 11,
              pattern:
                /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
            })}
            aria-invalid={errors.companyRegistry ? "true" : "false"}
          />
          {errors.companyRegistry?.type === "required" && (
            <p role="alert">Informe o nº do CNPJ</p>
          )}
        </fieldset>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            justifyContent: "flex-end",
          }}
        >
          <button className="Button green" onClick={handleSubmit(createUser)}>
            Enviar
          </button>
        </div>
      </form>
    </Tabs.Content>
  );
}
