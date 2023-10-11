import Header from "../components/Header";
import Footer from "../components/Footer";

type ThemeProps = {
    children: React.ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}