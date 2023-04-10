import { useRouter } from "next/router";
import * as Avatar from "@radix-ui/react-avatar";
import Patient from "@/pages/_forms/Patient";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import SearchUser from "@/components/SearchUser";

import { useEffect, useState } from "react";
import { useAuth } from "@/utils/middleware/useAuth";

import { GenderEnum } from "@/utils/GenderEnum";
import { update, deleteUser, retoreUser } from "@/api/service/PatientService";
import { findAll } from "@/api/service/PatientService";
import { IFormUserPatient } from "@/utils/IFormUserPatient";
import { UserPatientTransform } from "@/utils/UserPatientTransform";

export default function Dashboard() {
  // const router = useRouter();

  const [userSelected, setUserSelected] = useState<IFormUserPatient>({
    userId: "",
    name: "",
    email: "",
    password: "",
    gender: GenderEnum.female,
    birthdate: "",
    registerNumber: "",
    statusActive: false,
    patientId: "",
  });

  const [listUsers, setUsers] = useState<IFormUserPatient[]>([]);

  // const [userLogged, setUserLogged] = useState<{
  //   token: string;
  //   name: string;
  // }>({ token: "", name: "" });

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   setUserLogged({
    //     token: localStorage.getItem("token_authorizarion") ?? "",
    //     name: localStorage.getItem("user_name") ?? "",
    //   });
    // }

    getUsers().then((users) => setUsers(users));
  }, []);

  const { token, name } = useAuth();
  if (!token) return null;

  async function getUsers(): Promise<IFormUserPatient[]> {
    const response = await findAll();

    return response.map((user) => {
      return UserPatientTransform.fromResponse(user);
    });
  }

  function openUserDetail(userSelected: IFormUserPatient) {
    setUserSelected(userSelected);
  }

  async function onSave(userSelected: IFormUserPatient) {
    const userTransform = UserPatientTransform.toRequest(userSelected);

    try {
      await update(userSelected.userId, userTransform);
      setUserSelected(userSelected);
      alert("Paciente atualizado!");

      getUsers().then((users) => setUsers(users));
    } catch (error: any) {
      alert(error.message);
    }
  }

  function handleStateUser(isActive: boolean, userSelectedId: string) {
    isActive ? onDeleteUser(userSelectedId) : onRestoreUser(userSelectedId);
  }

  async function onRestoreUser(userSelectedId: string) {
    try {
      const userUpdated = await retoreUser(userSelectedId);
      setUserSelected({ ...userSelected, statusActive: true });

      alert("Paciente reativado com sucesso!");

      getUsers().then((users) => setUsers(users));
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function onDeleteUser(userSelectedId: string) {
    try {
      const userUpdated = await deleteUser(userSelectedId);
      setUserSelected({ ...userSelected, statusActive: false });

      alert("Paciente desativado com sucesso!");

      getUsers().then((users) => setUsers(users));
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div className="ui-dashboard bg-gray-100  text-gray-600 h-screen flex overflow-hidden text-sm">
      <Aside />

      <div className="flex-grow overflow-hidden h-full flex flex-col gap-5">
        <Header userName={name || "-"} />

        <div className="ui-dash-content flex-grow flex overflow-x-hidden gap-5">
          <SearchUser onUserClick={openUserDetail} listUsers={listUsers} />

          <div className="ui-list-dash flex-grow bg-white  overflow-y-auto">
            {userSelected?.userId ? (
              <>
                <div className="ui-head-list p-4 flex flex-col w-full border-b border-gray-200 sticky top-0 backdrop-blur-sm bg-white/30">
                  <div className="flex w-full items-center">
                    <div className="flex items-center text-3xl text-gray-900 ">
                      <Avatar.Root className="AvatarRoot w-12 h-12 mr-2">
                        <Avatar.Image
                          className="AvatarImage"
                          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                        />
                      </Avatar.Root>
                      {userSelected && <p>{userSelected.name}</p>}
                    </div>
                    <div className="ml-auto sm:flex hidden items-center justify-end">
                      <div className="text-right">
                        {userSelected?.statusActive ? (
                          <button
                            className="Button negative rounded-[20px] py-2 px-4"
                            onClick={() =>
                              handleStateUser(
                                userSelected?.statusActive,
                                userSelected?.userId
                              )
                            }
                          >
                            Desativar
                          </button>
                        ) : (
                          <button
                            className="Button positive rounded-[20px] py-2 px-4"
                            onClick={() =>
                              handleStateUser(
                                userSelected?.statusActive,
                                userSelected?.userId
                              )
                            }
                          >
                            Reativar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ui-content-list sm:p-7 p-4">
                  <Patient defaultValues={userSelected} onSubmit={onSave} />
                </div>
              </>
            ) : (
              <div className="ui-head-list p-4 flex flex-col w-full border-b border-gray-200 sticky top-0 backdrop-blur-sm bg-white/30">
                <p className="text-center text-slate-400 break-words">
                  Selecione um paciente ao lado para visualizar e editar
                  detalhes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
