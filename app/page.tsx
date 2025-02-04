import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log('What am i doing here? -- SERVRE/Client?');
  return (
    <div>
      <Hello/>
    <h1 className="text-3xl">Welcome to the world of Next.js</h1>
    <h2>Hello World!</h2>
    </div>
  );
}
