"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkMOdeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(
    () => setMounted(true),

    []
  );

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className='flex items-center px-3'>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500 mx-2 "
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer hover:text-amber-500 mx-2 "
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
}
