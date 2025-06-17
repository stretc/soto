"use client";

import * as React from "react";

import { useTheme } from "next-themes";
import { Button } from "./button";
import { CircleHalfTiltIcon } from "@phosphor-icons/react/dist/ssr";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const handleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={handleMode}
      className="bg-background hover:bg-secondary shadow-none h-[25px] w-[25px]"
    >
      <CircleHalfTiltIcon
        className="text-foreground"
        style={{ height: "1.2em", width: "1.2em" }}
      />
    </Button>
  );
};

export default ModeToggle;
