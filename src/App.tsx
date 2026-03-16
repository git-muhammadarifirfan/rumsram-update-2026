import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import BlogPage from './pages/BlogPage';
import GaleriPage from './pages/GaleriPage';
import HomePage from './pages/HomePage';
import JoinUsPage from './pages/JoinUsPage';
import KegiatanPage from './pages/KegiatanPage';
import KontakPage from './pages/KontakPage';
import ProgramPage from './pages/ProgramPage';
import TentangPage from './pages/TentangPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang" element={<TentangPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/kegiatan" element={<KegiatanPage />} />
        <Route path="/galeri" element={<GaleriPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/kontak" element={<KontakPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
      </Route>
    </Routes>
  );
}
