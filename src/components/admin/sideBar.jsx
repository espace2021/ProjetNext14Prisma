'use client';

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Link from 'next/link';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import WbShadeIcon from '@mui/icons-material/WbShade';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import LightModeIcon from '@mui/icons-material/LightMode';

const SideBar = () => {
  return (
    <Sidebar>

        <Menu
            menuItemStyles={{
            button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                return {
                    color: disabled ? '#b4c2c0' : '#718280',
                    backgroundColor: active ? '#4f5d73' : '#071121',
                };
            },
            }}
        >
      <MenuItem>  
<div className="card" style={{"backgroundColor": "#90E931"}}>
        <div className="card-body">
          <AdminPanelSettingsIcon /> Administrateur
        </div>
      </div>
      </MenuItem>
      <MenuItem component={<Link href="/admin/dashboard" />}> <DashboardIcon/> Dashboard </MenuItem>
      <MenuItem component={<Link href="/admin/livres" />}> <LibraryBooksIcon/> Livres </MenuItem>
      <MenuItem component={<Link href="/admin/auteurs" />}> <SupervisedUserCircleIcon/> Auteurs </MenuItem>
      <MenuItem component={<Link href="/admin/editeurs" />}> <WbShadeIcon/> Editeurs</MenuItem>
      <MenuItem component={<Link href="/admin/specialites" />}> <FeaturedPlayListIcon/> Spécialités</MenuItem>
      <MenuItem component={<Link href="/admin/users" />}> <GroupIcon/> Utilisateurs </MenuItem>
      <MenuItem component={<Link href="/admin/orders" />}> <ReceiptIcon/> Commandes </MenuItem>
      <MenuItem component={<Link href="/admin/calendars" />}> <CalendarMonthIcon/> Calendrier </MenuItem>
      <MenuItem component={<Link href="/admin/chart" />}> <BarChartIcon/> Chart </MenuItem>
      <MenuItem component={<Link href="/admin/theme" />}> <LightModeIcon/> Thème </MenuItem>
    </Menu>
  </Sidebar>
  )
}

export default SideBar
