
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Hello World!</h2>
      <Link href='/users'>Users</Link>
    </div>
  );
}
