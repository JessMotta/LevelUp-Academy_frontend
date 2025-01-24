import CardUser from "./components/CardUser/CardUser";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className="md:w-[480px] mx-auto bg-dark"> 
    <Header/>
      <CardUser/>
    </div>
  );
}
