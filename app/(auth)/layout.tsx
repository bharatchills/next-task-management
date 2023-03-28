import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";
import Head from "../head";

import "@/styles/global.css";



interface AuthRootLayoutProps {
  children: React.ReactNode;
}

const AuthRootLayout: React.FC<AuthRootLayoutProps> = ({ children }) =>{
  return (
    <html lang="en">
        <Head/>
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}

export default AuthRootLayout;