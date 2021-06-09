import React from 'react';

import { ReactComponent as HomeIcon } from '../assets/svg/grid.svg';
import { ReactComponent as ChatIcon } from '../assets/svg/chat.svg';
import { ReactComponent as PersonIcon } from '../assets/svg/person.svg';
import { ReactComponent as BellIcon } from '../assets/svg/bell.svg';
import { ReactComponent as CalendarIcon } from '../assets/svg/calendar.svg';
import { ReactComponent as SettingsIcon } from '../assets/svg/settings.svg';
import { ReactComponent as PowerIcon } from '../assets/svg/power.svg';

let icons = {
  'home': HomeIcon,
  'chat': ChatIcon,
  'person': PersonIcon,
  'bell': BellIcon,
  'calendar': CalendarIcon,
  'settings': SettingsIcon,
  'power': PowerIcon
}

export default function SidebarItem({ item: { icon, text } }) {
  let Icon = icons[icon];

  return (
    <div className="flex w-auto text-md ml-8 mb-8 group cursor-pointer items-center">
      <Icon className="fill-current group-hover:text-active text-light"/>
      <h1 className="pl-4 text-light group-hover:text-active text-sm">{text}</h1>
    </div>
  )
}
