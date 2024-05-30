'use client';
import {Button} from "@mui/material";
import Navbar from "@/app/components/NavBar";
import MainLayout from "@/app/layouts/MainLayout";

export default function Home() {
  return (
      <>
          <MainLayout>
          <div className="center">
              <h1>Добро пожаловать!</h1>
              <h3>Здесь собраны лучшие треки!</h3>
          </div>
          </MainLayout>
      <style jsx>
          {`
            .center{ 
             margin-top: 150px;
             display: flex;
             align-items: center;
             justify-content: center;
             flex-direction: column;
             }

          `}

       </style>

      </>

  );
}
