import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import { MdHttps } from "react-icons/md";
import { FcPhone } from "react-icons/fc";
import { useRouter } from 'next/router'


const Home: NextPage = () => {
  const router = useRouter()
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-green-200">
      <Head>
        <title>Celetal webpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-blue-500">Celetal</span>Technologies
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">Sign In To Account</h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm"></FaFacebookF>
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm"></FaGoogle>
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaLinkedinIn className="text-sm"></FaLinkedinIn>
                </a>
              </div>
              <p className="text-gray-400 my-3">or use your mobile number</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FcPhone className="text-gray-400 mr-2 "></FcPhone>
                  <input type="phonenumber" name="number" placeholder="Mobile Number" className="bg-gray-100"></input>
                </div>
                <button onClick={() => router.push('/otp')} className="border-2 text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-bold hover:bg-blue-500 hover:text-white my-3">Submit</button>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Fill up your information and Sign-Up.</p>
            <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-bold hover:bg-white hover:text-blue-500">Sign Up</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
