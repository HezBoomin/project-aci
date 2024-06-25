import News from "../components/cardNews";
import Image from "next/image";

export default function Home() {
  return (
      <>
          <main className="flex min-h-screen flex-col items-center">
              <div className="flex items-center justify-center w-full text-center pt-24 p-4">
                  <div>
                      <h1 className="text-4xl font-bold text-red-900">Our Latest News</h1>
                  </div>
              </div>
              <div className="flex flex-wrap justify-center pt-4">
                  <News/>
              </div>
          </main>
      </>
  );
}
