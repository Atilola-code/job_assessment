import React from "react";
import { BsCardImage, BsRocket } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import { ImMagicWand } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { IoBody, IoVideocam } from "react-icons/io5";
import { MdOutlineModelTraining } from "react-icons/md";


interface GeneratorProps {
    darkMode: boolean
}

export default function Generator({darkMode}: GeneratorProps) {
  const items = [
    {
      icon: <BsCardImage className="p-2 text-5xl bg-gray-500 text-white rounded-lg" />,
      title: "Image",
      new: true,
      description:"Generate images with custom styles in Flux and ideogram",
    },
    {
      icon: <IoVideocam className="p-2 text-5xl bg-amber-500 text-white rounded-2xl" />,
      title: "Video",
      description:"Generate videos with Hailuo, Pika, Runway, Luma and more.",
    },
    {
      icon: <FaPenFancy className="p-2 text-5xl bg-blue-300 text-white rounded-2xl" />,
      title: "Realtime",
      description:"Realtime AI rendering on a canvas, instant feedback loops.",
    },
    {
      icon: <ImMagicWand className="p-2 text-5xl bg-black/40 text-gray-300 rounded-2xl" />,
      title: "Enhancer",
      new: true,
      description:"Upscale and enhance images and videos up to 22K.",
    },
    {
      icon: <BsRocket className="p-2 text-5xl bg-purple-950 text-purple-300 rounded-2xl" />,
      title: "Edit",
      new: true,
      description:"Add objects, change styles or expand photos and generations.",
    },
    {
      icon: (
        <GiMicrophone className="p-2 text-5xl bg-green-600 text-white rounded-2xl" />
      ),
      title: "Video Lipsync",
      new: true,
      description:"Lipsync any video to any audio easily.",
    },
    {
      icon: <IoBody className="p-2 text-5xl bg-gray-900 text-gray-200 rounded-2xl" />,
      title: "Motion Transfer",
      new: true,
      description:"Transfer motion to images and animate characters.",
    },
    {
      icon: (
        <MdOutlineModelTraining className="p-2 text-5xl bg-gray-300 text-orange-500 rounded-2xl" />
      ),
      title: "Train",
      description:"Train Krea to replicate your style, products or characters.",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 px-8 mt-12">
        <h2 className="text-2xl font-semibold items-start">Generate</h2>
        <button className="flex items-center gap-2 text-blue-500 hover:animate-pulse">
          <IoIosArrowDown className="text-xl"/>
          <span className="text-lg">Show all</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-rows-[auto,1fr,auto] items-center bg-white gap-2 p-4 rounded-2xl transition-all">
            <div className="flex flex-row items-center gap-4">
            <div>{item.icon}</div>
            <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className={`font-semibold text-lg ${darkMode ? 'text-gray-900' : 'text-gray-800' }`}>{item.title}</p>
              {item.new && (
                  <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                  New
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700 leading-snug break-words max-w-sm">{item.description}</p>
              </div>
            <button className={`px-4 py-1 bg-gray-300 rounded-full text-sm font-medium  ${darkMode ? 'hover:text-white ' : 'hover:text-gray-700'}`}>
              Open
            </button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
