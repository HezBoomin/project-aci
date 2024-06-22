import Image from "next/image";

export default function Leadership() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center pt-24 p-4">
                <div className="flex items-center justify-center w-full px-20 text-center">
                    <h1 className="text-4xl ">Leadership Training</h1>
                </div>
                <div className="flex flex-wrap justify-center pt-4">
                    <Image
                        alt="leadership-training"
                        className="object-cover"
                        src="/leadership.png"
                        width={800}
                        height={800}
                    />
                </div>
            </main>
        </>
    );
}
