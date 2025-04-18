import Link from "next/link";
import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="flex justify-center space-x-10 mt-25 p-5">
        <Link href="/" >
          <Image className="rounded-full w-50 h-50"
            href="/"
            src="./profile_ghibli.png"
            alt="Profile"
            width={700}
            height={700}
          />
        </Link>
        <div className="pt-15">
          <h1 className="text-3xl font-bold">Seung H.</h1>
          <p className="text-gray-600">Software Engineer | Curious by Nature</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-10 space-y-4 sm:space-y-0 text-2xl font-bold mt-15 text-center sm:text-left">
        <Link href="/">Skills</Link>
        <Link href="/about">About</Link>
        <Link href="https://github.com/wassup-chicken" target="_blank">Github</Link>
        <Link href="https://linkedin.com/in/hongseungnyc" target="_blank">LinkedIn</Link>
        <Link href="/test">Test API</Link>
      </div>
    </>
  )
}

export default Profile;