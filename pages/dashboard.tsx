import * as Avatar from "@radix-ui/react-avatar";
import Patient from "@/pages/_forms/Patient";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import SearchUser from "@/components/SearchUser";
import { useState } from "react";

import { GenderEnum } from "@/utils/GenderEnum";
import { IFormUserPatient } from "@/utils/IFormUserPatient";

export default function Dashboard() {
  // const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [userSelected, setUserSelected] = useState<IFormUserPatient | null>({
    userId: "",
    name: "",
    email: "",
    password: "",
    gender: GenderEnum.female,
    birthdate: "",
    registeNumber: "",
    statusActive: false,
    patientId: "",
  });

  function openUserDetail(userSelected: IFormUserPatient) {
    console.log("clicou", userSelected);
    setUserSelected(userSelected);
  }

  function onSave(userSelected: IFormUserPatient) {
    console.log("ON SAVE", userSelected);
    // setUserSelected(userSelected);
  }

  return (
    <div className="ui-dashboard bg-gray-100  text-gray-600 h-screen flex overflow-hidden text-sm">
      <Aside />

      <div className="flex-grow overflow-hidden h-full flex flex-col gap-5">
        <Header />

        <div className="ui-dash-content flex-grow flex overflow-x-hidden gap-5">
          <SearchUser onUserClick={openUserDetail} />

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
                          <button className="Button negative rounded-[20px] py-2 px-4">
                            Desativar
                          </button>
                        ) : (
                          <button className="Button positive rounded-[20px] py-2 px-4">
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
