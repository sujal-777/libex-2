// import React from "react";
// // import BlogCard from "./BlogCard";

// function Blog() {
//   const blogPosts = [
//     {
//       imgSrc: "https://via.placeholder.com/300", // Replace with your actual image URL
//       date: "20 Jan",
//       title: "How Our Training And Internship Program Prepares You For Success",
//       author: "Admin",
//       comments: "2 Comments",
//     },
//     {
//       imgSrc: "https://via.placeholder.com/300", // Replace with your actual image URL
//       date: "20 Feb",
//       title: "The Power Of Hands-On Training And Internships",
//       author: "Admin",
//       comments: "3 Comments",
//     },
//     {
//       imgSrc: "https://via.placeholder.com/300", // Replace with your actual image URL
//       date: "15 Mar",
//       title: "Real-World Skills You Gain From Our Internship Program",
//       author: "Admin",
//       comments: "1 Comment",
//     },
//   ];

//   return (
//     <div className="flex justify-center w-full bg-violet-200 py-10">
//       <div className="flex flex-col w-4/5 gap-10">
//         {/* Blog Header Section */}
//         <div className="text-center">
//           <div className="text-orange-500 text-sm uppercase">Latest Blog</div>
//           <h2 className="font-semibold text-5xl text-gray-800">
//             Our Latest <span className="text-cyan-500">Blog News</span>
//           </h2>
//           <p className="text-gray-600 mt-4">
//             Tailored for students and professionals, the program combines
//             expert-led training with real-world project exposure. Kickstart your
//             career with mentorship, networking opportunities, and a pathway to
//             innovation-driven growth!
//           </p>
//         </div>

//         {/* Blog Cards Section */}
//         <div className="flex gap-5 justify-center">
//           {blogPosts.map((post, index) => (
//             <BlogCard
//               key={index}
//               imgSrc={post.imgSrc}
//               date={post.date}
//               title={post.title}
//               author={post.author}
//               comments={post.comments}
//             />
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex justify-center items-center gap-4">
//           <button className="w-10 h-10 bg-white text-purple-500 rounded-full shadow-md hover:bg-purple-100 flex items-center justify-center">
//             ←
//           </button>
//           <button className="w-10 h-10 bg-white text-purple-500 rounded-full shadow-md hover:bg-purple-100 flex items-center justify-center">
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;



import React from "react";
import blogImage from "../../public/Images/Blogsection.png"; // Replace with the correct path to your image

const Blog = () => {
  return (
    <div className="blog">
      <img src={blogImage} alt="Blog Section" />
    </div>
  );
};

export default Blog;
