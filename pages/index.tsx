import { Button } from '@mantine/core';

export default function Home() {
  return (
    <main className="container mx-auto bg-white min-h-screen">
      <div className="py-24">
        <h1 className="font-bold text-5xl">Hello World</h1>

        <Button className="mt-16">Hello Mantine</Button>
      </div>
    </main>
  );
}
