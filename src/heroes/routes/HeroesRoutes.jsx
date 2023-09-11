import { Navbar } from "../../ui/components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPages, DcPage, SearchPage, HeroPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-4'>
        <Routes>
          <Route path='marvel' element={<MarvelPages />} />
          <Route path='dc' element={<DcPage />} />

          <Route path='search' element={<SearchPage />} />
          <Route path='/hero/:id' element={<HeroPage />} />
        </Routes>
      </div>
    </>
  );
};
