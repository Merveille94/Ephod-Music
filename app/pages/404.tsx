import Link from "next/link";

export default function Custom404() {
    return (
        <div className="h-screen flex justify-center items-center">
            <h1 className="text-3xl font-bold pb-4">404 - Page Not Found</h1>
            <Link href="/">Click me!!</Link>
        </div>
    );
}
