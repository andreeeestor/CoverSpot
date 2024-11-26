import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import {
  Headset,
  House,
  MicrophoneStage,
  UsersThree,
  CaretDoubleRight,
  Question,
  UserCirclePlus,
  UserCircle,
  SignOut,
  Playlist,
  Suitcase,
  ClockCounterClockwise
} from "@phosphor-icons/react";

const Sidebar = ({ active }) => {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserType = localStorage.getItem("userType");

    setIsAuthenticated(!!token);
    setUserType(storedUserType);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    setIsAuthenticated(false);
    setUserType(null);
    window.location.href = "/";
  };

  return (
    <motion.nav
      layout
      className="fixed top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2 z-50"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option Icon={House} title="Home" open={open} link="/" />
        <Option Icon={Question} title="FAQs" open={open} link="/faqs" />
        <Option
          Icon={UsersThree}
          title="Comunidade"
          open={open}
          link="/comunidade"
        />
        <Option Icon={Headset} title="Suporte" open={open} link="/suporte" />
        {userType === "estabelecimento" && (
          <>
          <Option Icon={Playlist} title="Bandas" open={open} link="/bandas" />
          <Option Icon={ClockCounterClockwise} title="Histórico de Propostas" open={open} link="/historico-propostas" />
          </>
        )}
        {userType === "banda" && (
          <Option
            Icon={Suitcase}
            title="Propostas"
            open={open}
            link="/propostas"
          />
        )}
        <hr />
        {isAuthenticated ? (
          <>
            <Option
              Icon={UserCircle}
              title="Meu Perfil"
              open={open}
              link={
                userType === "estabelecimento"
                  ? "/perfil-estabelecimento"
                  : "/perfil"
              }
              active={active}
            />
            <button
              onClick={handleLogout}
              className={`relative flex h-10 w-full items-center rounded-md transition-colors text-slate-500 hover:bg-slate-100`}
            >
              <motion.div
                layout
                className="grid h-full w-10 place-content-center text-lg"
              >
                <SignOut />
              </motion.div>
              {open && (
                <motion.span
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.125 }}
                  className="text-xs font-medium"
                >
                  Sair
                </motion.span>
              )}
            </button>
          </>
        ) : (
          <Option
            Icon={UserCirclePlus}
            title="Autenticação"
            open={open}
            link="/autenticacao"
            active={active}
          />
        )}
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, open, link, active }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link
      to={link}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        isActive || active
          ? "bg-sky-100 text-sky-800"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}
    </Link>
  );
};

const TitleSection = ({ open }) => (
  <div className="mb-3 border-b border-slate-300 pb-3">
    <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
      <div className="flex items-center gap-2">
        <Logo />
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
          >
            <span className="block font-semibold">CoverSpot</span>
          </motion.div>
        )}
      </div>
    </div>
  </div>
);

const Logo = () => (
  <motion.div
    layout
    className="grid size-10 shrink-0 place-content-center rounded-md bg-[#007bff]"
  >
    <MicrophoneStage color="white" weight="bold" />
  </motion.div>
);

const ToggleClose = ({ open, setOpen }) => (
  <motion.button
    layout
    onClick={() => setOpen((prev) => !prev)}
    className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
  >
    <div className="flex items-center p-2">
      <motion.div layout className="grid size-10 place-content-center text-lg">
        <CaretDoubleRight
          className={`transition-transform ${open && "rotate-180"}`}
        />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          Fechar
        </motion.span>
      )}
    </div>
  </motion.button>
);

export default Sidebar;
