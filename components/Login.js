import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="relative">
      <div className="flex flex-col absolute z-50 h-full items-center justify-center w-full space-y-4">
        {/* papa fan logo */}
        <img
          src="/logo.svg"
          height={100}
          width={100}
          className="object-cover"
        />
        {/* login button */}
        <button
          onClick={authenticate}
          className="bg-[#6370e5] text-white rounded-lg p-4 font-bold animate-pulse ring-offset-2 ring-2 ring-blue-500"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen bg-[#060D20]">
        <Image
          src="https://www.blocknative.com/hubfs/images_2021/Gradient.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
