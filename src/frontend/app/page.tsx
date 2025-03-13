import Form from "./form";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold uppdercase items-start">COM617 Web6S</h1>
            <div className="flex items-center justify-center w-full">
                <Form />
            </div>
    </main>
  );
}
