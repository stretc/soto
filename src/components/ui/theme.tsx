"use client";

import * as React from "react";

import { useTheme } from "next-themes";
import { SunMoon } from "lucide-react";
import { Button } from "./button";

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
    <Button onClick={handleMode}>
      <SunMoon />
    </Button>
  );
};

export default ModeToggle;
