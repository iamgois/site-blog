import Image from "next/image";
import Link from "next/link";

export default function User(){
    return(
        <div>
            <h1>Users</h1>

            <Link href="/">Página home</Link>

            <Image src="/assets/code.jfif"
            alt="code"
            width={500}
            height={500}/>
        </div>
    )
}