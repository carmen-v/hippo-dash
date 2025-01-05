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
        visible: ["yoohoos", "buni", "rob"],
      },
      {
        icon: "/yoohoos.png",
        label: "Yoohoos",
        href: "/list/yoohoos",
        visible: ["yoohoos", "buni", "rob"],
      },
      {
        icon: "/rob.png",
        label: "Rob",
        href: "/list/rob",
        visible: ["yoohoos", "buni", "rob"],
      },
      {
        icon: "/buni.png",
        label: "Buni",
        href: "/list/teachers",
        visible: ["yoohoos", "buni", "rob"],
      },
      {
        icon: "/shopping-list.png",
        label: "Shopping List",
        href: "/list/shopping-list",
        visible: ["yoohoos", "buni", "rob"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["yoohoos", "buni", "rob"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["yoohoos", "buni", "rob"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["yoohoos", "buni", "rob"],
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
