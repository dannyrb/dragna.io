import Header from "../components/Header";
import Footer from "../components/Footer";

type ThemeProps = {
    children: React.ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  return (
    <div className="purple" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh'}}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
