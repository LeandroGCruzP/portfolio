export interface NavButton {
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

export const BtnList: NavButton[] = [
    { label: "Sobre mim", link: "/about", icon: "about", newTab: false },
    // { label: "Projects", link: "/projects", icon: "projects", newTab: false },
    // { label: "Contact", link: "/contact", icon: "contact", newTab: false },
    {
      label: "Github",
      link: "https://github.com/leandrogcruzp",
      icon: "github",
      newTab: true,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/leandrogcruzp",
      icon: "linkedin",
      newTab: true,
    },
    {
      label: "Curriculum",
      link: "/resume_pt.pdf",
      icon: "resume",
      newTab: true,
    },
  ];