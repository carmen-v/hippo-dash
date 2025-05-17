import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/calendar.png",
        label: "Calendar",
        href: "/calendar",
      },
      {
        icon: "/shopping-list.png",
        label: "Shopping List",
        href: "/shopping-list",
      },
      {
        icon: "/dinner.png",
        label: "Dinner",
        href: "/dinner",
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/messages",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
         visible: ["yoohoos", "buni", "rob"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
         visible: ["yoohoos", "buni", "rob"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
         visible: ["yoohoos", "buni", "rob"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
          {i.items.map((item) => (
            <Link key={item.label} href={item.href} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
