import { Outlet } from 'react-router-dom';
import SiteNavbar from './SiteNavbar';

export default function SiteLayout() {
  return (
    <>
      <SiteNavbar />
      <Outlet />
    </>
  );
}
