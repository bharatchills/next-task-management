import "@/styles/global.css";
import Sidebar from "@/components/Sidebar";
import GlassPane from "@/components/GlassPane";
import Head from "../head";

interface DashboardRootLayoutProps {
    children: React.ReactNode;
}


const DashboardRootLayout:React.FC<DashboardRootLayoutProps> = ({ children })=> {
  return (
    <html lang="en">
      <Head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
          <Sidebar />
          <main className="w-full pl-6 h-full">{children}</main>
        </GlassPane>
      </body>
    </html>
  );
}

export default DashboardRootLayout;
