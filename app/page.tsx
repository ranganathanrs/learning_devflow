import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log('What am i doing here? -- SERVRE/Client?');
  return (
    <div><h1 className="text-3xl text-light-500">Welcome to the world of Next.js</h1>
    <h2>Hello World!</h2>
    </div>
  );
}
