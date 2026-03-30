import HeaderDrawerWrapper from "@/ui/HeaderDrawerWrapper";
import NavbarText from "@/ui/NavbarText";
import Sidebar from "@/ui/Sidebar";
import UserDashboardHeader from "@/ui/UserDashboardHeader";
import { ConfigProvider } from "antd";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 bg-[#f7f8ff]">
      {/* Desktop Sidebar */}
      <div className="hidden md:block col-span-2 h-screen overflow-x-hidden border-e-2 border-[#121447] shadow text-white">
        <Sidebar />
      </div>

      {/* Main container */}
      <div className="col-span-12 md:col-span-10 h-screen">
        <div className="h-[90px] flex items-center justify-between border-b-2 border-[#121447] bg-[#06073d]!">
          <div className="text-white flex">
            <HeaderDrawerWrapper />
            <NavbarText />
          </div>

          <div className="h-[90px] flex items-center justify-between  text-[#f7f8ff]">
            <UserDashboardHeader />
          </div>
        </div>

        {/* Content */}
        <div className=" h-[calc(100vh-90px)]">
          <div className="h-full overflow-y-auto  md:p-5 p-2 bg-cover bg-no-repeat bg-center bg-[#f7f8ff]">
            {/* <ConfigProvider
              theme={{
                components: {
                  Select: {
                    clearBg: "transparent",
                    selectorBg: "#38115f",
                    activeBorderColor: "#38115f",
                    activeOutlineColor: "transparent",
                    optionSelectedBg: "#7c7c7f",
                  },
                },
                token: {
                  colorPrimary: "#A855F7",
                  colorIcon: "white",
                  colorBgBase: "transparent",
                  colorText: "white",
                  colorTextPlaceholder: "#9CA3AF",
                },
              }}
            >
            </ConfigProvider> */}
              {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
