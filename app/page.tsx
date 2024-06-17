import Nav from "../components/nav";
import Footer from "../components/footer";
import News from "../components/cardNews";

export default function Home() {
  return (
      <>
        <main className="flex min-h-screen flex-col items-center pt-24 p-4">
            <div className="flex items-center justify-center w-full px-20 text-center">
                <h1 className="text-4xl ">Our Latest News</h1>
            </div>
            <div className="flex flex-wrap justify-center pt-4">
                <News/>
            </div>
        </main>
      </>
  );
}
