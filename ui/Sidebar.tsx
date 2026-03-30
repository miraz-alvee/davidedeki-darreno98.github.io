"use client";
import { ConfigProvider, Menu } from "antd";
import type { MenuProps } from "antd";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { usePathname } from "next/navigation";
import { getMenuItems } from "@/constants/dashboard-menuItems";
import Link from "next/link";
import Cookies from "js-cookie";

interface SidebarProps {
  onCloseDrawer?: () => void;
}

const Sidebar = ({ onCloseDrawer }: SidebarProps) => {
  const path = usePathname() || "/";
  const [selectedKey, setSelectedKey] = useState<string>(path);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectedKey(path);
  }, [path]);

  const items = getMenuItems(selectedKey);

  const handleOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys as string[]);
  };

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    setSelectedKey(key);
    onCloseDrawer?.();
  };

  const logout = () => {
    Cookies.remove("token");
  };

  return (
    <div
      style={{
        backgroundImage: "url('/sidebar-image.png')",
      }}
      className="relative h-full pt-8 ps-3 w-full"
    >
      <div className="flex flex-col h-full">
        <Link
          href="/"
          className="pb-3 flex items-center justify-center"
          onClick={onCloseDrawer}
        >
          <img src="/dashboard-logo.png" className="w-48 lg:w-60" alt="logo" />
        </Link>

        <div className="flex-1 overflow-y-auto w-full pr-2 pb-16">
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  itemSelectedBg: "#212170",
                  itemHoverBg: "#212170",
                  itemActiveBg: "#212170",
                  itemSelectedColor: "#F1F1F1",
                  itemBorderRadius: 10,
                  itemHeight: 47,
                },
              },
              token: { colorText: "#FFFFFF" },
            }}
          >
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              openKeys={openKeys}
              onOpenChange={handleOpenChange}
              onClick={handleClick}
              style={{
                borderRightColor: "transparent",
                background: "transparent",
              }}
              items={items}
            />
          </ConfigProvider>
        </div>

        <div className="py-3 ps-3 absolute bottom-0 w-full ">
          <Link
            href="/login"
            onClick={logout}
            className="flex items-center gap-x-2 text-red-500 hover:text-red-600"
          >
            <IoIosLogOut size={18} />
            <span className="font-normal">Log Out</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
