import * as Avatar from "@radix-ui/react-avatar";

interface HeaderProps {
  userName: string;
}

export default function Header({ userName }: HeaderProps) {
  return (
    <section className="ui-header-dash lg:flex w-full border-b border-gray-200 hidden px-10 py-4">
      <div className="ml-auto flex items-center space-x-7">
        <button className="flex items-center">
          <span className="relative flex-shrink-0">
            <Avatar.Root className="AvatarRoot w-11 h-11">
              <Avatar.Image
                className="AvatarImage"
                src="https://images.unsplash.com/photo-1585890483046-9461ebc1dace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
            </Avatar.Root>
            <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white "></span>
          </span>
          <span className="ml-2">{userName}</span>
        </button>
      </div>
    </section>
  );
}
