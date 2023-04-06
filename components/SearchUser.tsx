import * as Avatar from "@radix-ui/react-avatar";
import Plus from "@/components/icons/Plus";
import Search from "@/components/icons/Search";

import { useEffect, useState } from "react";

import { GenderEnum } from "@/utils/GenderEnum";
import { IFormUserPatient } from "@/utils/IFormUserPatient";
import { UserPatientTransform } from "@/utils/UserPatientTransform";

interface AsideProps {
  onUserClick: (userSelected: IFormUserPatient) => void;
  listUsers: IFormUserPatient[];
}

const userSelected: IFormUserPatient = {
  userId: "1",
  name: "Lu",
  email: "lu@mail",
  password: "123",
  statusActive: true,
  patientId: "1",
  gender: GenderEnum.female,
  birthdate: "08/08/2000",
  registerNumber: "123456",
};

export default function SearchUser({ onUserClick, listUsers }: AsideProps) {
  const [users, setUsers] = useState<IFormUserPatient[]>(listUsers);

  useEffect(() => {
    setUsers(listUsers);
    console.log(users);
  }, [listUsers, users]);
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const response = await findAll();

  //     const users: IFormUserPatient[] = response.map((user) => {
  //       return UserPatientTransform.fromResponse(user);
  //     });

  //     setUsers(users);

  //     console.log(users);
  //   };

  //   getUsers();
  // }, []);

  return (
    <section className="ui-search-dash w-1/3 flex-shrink-0 border-r border-gray-200 hidden h-full overflow-y-auto lg:block p-5">
      <header className="bg-white space-y-4 p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-primary-color">Pacientes</h2>
          <button className="Button rounded-[20px] py-2 px-4">
            <Plus />
            Adicionar
          </button>
        </div>

        <form className="group relative flex items-center justify-between">
          <Search />
          <input
            className="Input w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            placeholder="Busque um usuário..."
          />
        </form>
      </header>

      <ul className="bg-slate-50 p-4  grid grid-cols-1 gap-4 text-sm leading-6">
        {users.map((user) => (
          <button
            key={`patient-${user.patientId}`}
            className="ui-item-user bg-white p-3 w-full flex flex-col rounded-md shadow gap-4"
            onClick={() => onUserClick(user)}
          >
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900  pb-2 xl:border-b border-gray-200 border-opacity-75  w-full">
              <Avatar.Root className="AvatarRoot w-7 h-7 mr-2">
                <Avatar.Image
                  className="AvatarImage"
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                />
              </Avatar.Root>
              {user.name}
            </div>

            <div className="flex items-center w-full">
              <div className="text-xs py-1 px-2 leading-none bg-primary-color-15 text-primary-color rounded-md">
                Data de nascimento
              </div>
              <div className="ml-auto text-xs text-gray-500">
                {user.birthdate || "-"}
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="text-xs py-1 px-2 leading-none  bg-primary-color-15 text-primary-color rounded-md">
                Nº Carteirinha
              </div>
              <div className="ml-auto text-xs text-gray-500">
                {user.registerNumber || "-"}
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="text-xs py-1 px-2 leading-none  bg-primary-color-15 text-primary-color rounded-md">
                Sexo
              </div>
              <div className="ml-auto text-xs text-gray-500">
                {user.gender || "Sem informação"}
              </div>
            </div>
          </button>
        ))}
      </ul>
    </section>
  );
}
