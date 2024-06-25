import Image from "next/image";
import Instagram from "@/components/instagram";

export default function Leadership() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center pt-24 p-4">
                <div className="flex items-center justify-center w-full px-20 text-center">
                    <h1 className="text-4xl font-bold text-red-900">Leadership Training</h1>
                </div>
                <div className="flex flex-wrap justify-center pt-4">
                    <Instagram/>
                </div>
            </main>
        </>
    );
}

