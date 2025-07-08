import { handleEmail, handleLink } from "@/lib/Helpers";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

interface SocialsProps {
  size?: "sm" | "md" | "lg";
}

export default function Socials({ size = "md" }: SocialsProps) {
  const SIZES = {
    sm: 28,
    md: 40,
    lg: 48,
  };
  const classes = "cursor-pointer duration-300 opacity-50 hover:opacity-100";

  return (
    <div className="flex gap-4">
      <Mail
        size={SIZES[size]}
        className={classes}
        onClick={() => handleEmail("klees@uwaterloo.ca")}
      />
      <Linkedin
        size={SIZES[size]}
        className={classes}
        onClick={() => handleLink("https://www.linkedin.com/in/keatonlees/")}
      />
      <Github
        size={SIZES[size]}
        className={classes}
        onClick={() => handleLink("https://github.com/keatonlees")}
      />
      <Instagram
        size={SIZES[size]}
        className={classes}
        onClick={() => handleLink("https://www.instagram.com/ctrlaltkeat/")}
      />
    </div>
  );
}
