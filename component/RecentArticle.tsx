import Image from 'next/image'
import React from 'react'

const articles = [
  {
    id: 1,
    image: "/article1.png",
    category: "Design",
    title: "UX review presentations",
    icon: "/design.png",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers? Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    author: {
      name: "Olivia Riyath",
      avatar: "/avatar1.png",
      date: "26 June, 2025",
    },
  },
  {
    id: 2,
    image: "/article2.png",
    category: "Development",
    title: "Building Scalable Web Apps",
    icon: "/code-icon.png",
    description:
      "Explore strategies for designing scalable web applications that grow with your user base.",
    author: {
      name: "Samuel Adeyemi",
      avatar: "/avatar2.png",
      date: "15 May, 2025",
    },
  },
  {
    id: 3,
    image: "/article3.png",
    category: "Marketing",
    title: "Effective Content Strategy",
    icon: "/marketing-icon.png",
    description:
      "Learn how to create content strategies that connect, convert, and deliver value over time.",
    author: {
      name: "Chioma Okeke",
      avatar: "/avatar3.png",
      date: "02 April, 2025",
    },
  },
];

const RecentArticle = () => {
  return (
   <div className="w-full min-h-screen xl:h-[100vh] px-4 md:px-8 lg:px-10 xl:px-20 py-10">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Recent Articles</h2>
  <span className="text-[15px] text-gray-700 mb-6 block">Stay Informed with Our Latest Insights</span>

  <div className="w-full flex flex-col md:flex-row flex-wrap gap-6 justify-start">
    {articles.map((item) => (
      <div
        key={item.id}
        className="w-full sm:w-[90%] md:w-[47%] lg:w-[30%] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
      >
        <Image
          src={item.image}
          alt="Article"
          width={350}
          height={240}
          className="w-full h-[240px] object-cover rounded-lg mb-4"
        />

        <h4 className="text-[#FF7D00] text-[16px] font-medium mb-1">Design</h4>

        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-[20px] font-semibold text-gray-900">
            UX review presentations
          </h3>
          <Image
            src="/design.png"
            alt="icon"
            width={20}
            height={20}
            className="w-[18px] h-[18px]"
          />
        </div>

        <p className="text-sm text-[#7B7A7A] mb-4">
          How do you create compelling presentations that wow your colleagues
          and impress your managers? Linear helps streamline software projects,
          sprints, tasks, and bug tracking. Here’s how to get started.
        </p>

        <div className="flex items-center gap-3">
          <Image
            src={item.author.avatar}
            alt="Author"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-semibold text-gray-900">Olivia Riyath</p>
            <p className="text-gray-600 text-[12px]">26 June, 2025</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default RecentArticle