import { Card } from "@/components/card";
import { CyberLove } from "@/components/cyberlove";
import { Credits } from "@/components/credits";
import { Settings } from "@/components/settings";
import { Terminal } from "@/components/terminal";
import { SelectOption } from "react95/dist/Select/Select.types";
import { BatExec2, ComputerFind, Inetcfg2301, Settings as SettingsIcon, User } from '@react95/icons';

export const WINDOWS: WindowReducer.Data[] = [

// Here, we can add icons on the home screen. My 3 main projects will be "apps" here.
{
  icon: Project1({ height: 32, width: 32 }),
  component: CyberLove,
  title: "CyberLove.proj",
  closeable: true,
  image: "👨‍💻",
  id: "cyberlove",
  minimazable: true,
},
  {
    icon: User({ height: 32, width: 32 }),
    component: Card,
    title: "Profile.exe",
    closeable: true,
    image: "👨‍💻",
    id: "profile",
    minimazable: true,
  },
  {
    title: "Terminal.exe",
    icon: BatExec2({ height: 32, width: 32 }),
    component: Terminal,
    closeable: true,
    image: "🖥️",
    id: "terminal",
    minimazable: true,
    style: {
      padding: 0,
    },
  },
  {
    title: "Settings.exe",
    icon: SettingsIcon({ height: 32, width: 32 }),
    component: Settings,
    closeable: true,
    image: "⚙️",
    id: "settings",
    minimazable: true,
  },
  {
    title: "Credits.exe",
    icon: Inetcfg2301({ height: 32, width: 32 }),
    component: Credits,
    closeable: true,
    image: "💳",
    id: "credits",
    minimazable: true,
  },
  {
    title: "Dev.exe",
    icon: ComputerFind({ height: 32, width: 32 }),
    component: Card,
    closeable: true,
    image: "👨‍💻",
    id: "dev",
    minimazable: true,
    hideInDesktop: true,
  },
];

export const COMPONENT_BY_ID = Object.fromEntries(
  WINDOWS.map((x) => [x.id, x.component])
);

export const ICON_BY_ID = Object.fromEntries(
  WINDOWS.map((x) => [x.id, x.icon])
);

export const AVAILABLE_FONTS: SelectOption<string>[] = [
  {
    value: "ms_sans_serif",
    label: "MS Sans Serif",
  },
  {
    value: "Arial",
    label: "Arial",
  },
  {
    value: "monospace",
    label: "Monospace",
  },
  {
    value: "tahoma",
    label: "Tahoma",
  },
  {
    value: "cursive",
    label: "Cursive",
  },
  {
    value: "sans-serif",
    label: "Sans Serif",
  },
  {
    value: "verdana",
    label: "Verdana",
  },
];