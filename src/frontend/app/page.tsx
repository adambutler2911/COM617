import './globals.css';
import Form from "./form";
import Graph from "./graph";

export default async function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-[24px]">
            <div className="grid grid-cols-100 w-full h-full">
                <Form />
                <Graph />
            </div>
        </main>
    );
}
