
// import React from "react";

// const Resume = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-gray-800">
//       {/* Header */}
//       <header className="text-center mb-10">
//         <h1 className="text-4xl font-bold">Mohammad Aslani</h1>
//         <p className="text-xl text-gray-600 mt-2">Frontend Developer</p>
//         <div className="mt-4 space-y-1 text-sm">
//           <p>Tehran</p>
//           <p>📞 09104503260 | ✉️ mohammadaslani3366@gmail.com</p>
//           <p>🔗 <a href="#" className="text-blue-600 hover:underline">LinkedIn</a></p>
//           <p>Military Service: Done | Age: 25 | Male, Unmarried</p>
//         </div>
//       </header>

//       {/* Summary */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Summary</h2>
//         <p>
//           Frontend Developer with hands-on experience in building responsive and user-friendly
//           web applications using React.js, JavaScript, and modern UI frameworks such as Tailwind
//           and Bootstrap. Skilled in developing clean and maintainable code, collaborating in agile
//           teams, and continuously learning new technologies to deliver high-quality user experiences.
//         </p>
//       </section>

//       {/* Personal Statement */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Personal Statement</h2>
//         <p>
//           A frontend developer passionate about learning with skills in React.js, Redux, Context API,
//           and other web development technologies. Highly capable of teamwork, eager to tackle
//           innovative and challenging projects.
//         </p>
//       </section>

//       {/* Technical Skills */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Technical Skills</h2>
//         <ul className="list-disc ml-6 space-y-1">
//           <li>JavaScript - Intermediate</li>
//           <li>Bootstrap - Intermediate</li>
//           <li>Tailwind CSS - Intermediate</li>
//           <li>React.js - Beginner</li>
//         </ul>
//       </section>

//       {/* Personal Skills */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Personal Skills</h2>
//         <ul className="list-disc ml-6 space-y-1">
//           <li>Problem solving and idea generation (SADAF PLAN)</li>
//           <li>Project management and teamwork (SADAF PLAN)</li>
//           <li>Languages: English (Intermediate)</li>
//         </ul>
//       </section>

//       {/* Education */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Education</h2>
//         <p className="font-medium">University, North Tehran Branch</p>
//         <p>Bachelor’s Degree in Software Engineering (2020 - 2022)</p>
//       </section>

//       {/* Download Button */}
//       <div className="text-center mt-10">
//         <a
//           href="/path-to-your-pdf/Mohammad-Aslani-Resume.pdf"
//           download
//           className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//         >
//           📄 Download Resume
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Resume;


///////////////////////////////////////////





import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaDownload, FaMapMarkerAlt, FaUserGraduate } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="bg-[#000000] text-[#F2F2F2] min-h-screen px-6 py-10 font-sans scroll-mt-20" id="contact">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700]">Mohammad Aslani</h1>
        <p className="text-xl md:text-2xl text-[#6A0DAD] mt-2"><strong>Frontend Developer</strong></p>
        <div className="mt-4 space-y-1 text-sm md:text-base">
          <p className="flex items-center justify-center gap-2"><FaMapMarkerAlt /> Tehran</p>
          <p className="flex items-center justify-center gap-2"><FaPhone /> 09104503260</p>
          <p className="flex items-center justify-center gap-2"><FaEnvelope /><strong>Email:</strong><a className="text-[#4169E1] hover:underline flex items-center justify-center gap-2" href="https://mail.google.com/mail/?view=cm&to=mohammadaslani3366@gmail.com&su=سلام محمد&body=سلام، درباره همکاری می‌خواستم صحبت کنم.">mohammadaslani3366@gmail.com</a></p>

          <p className="flex items-center justify-center gap-2"><FaLinkedin /> <strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/mohammadaslani211" target="_blank" className="text-[#4169E1] hover:underline"> mohammadaslani211</a></p>
          <p><b>Military Service:</b> Done | <b>Age:</b> 25 | Male, Unmarried</p>
        </div>
      </section>

      {/* Section Template */}
      <div className="grid gap-8">
        {/* Summary */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg scroll-mt-20" id="resume">
          <h2 className="text-2xl font-semibold text-[#FFD700] mb-2">Summary</h2>
          <p>
            Frontend Developer with hands-on experience in building responsive and user-friendly web
            applications using React.js, JavaScript, and modern UI frameworks such as Tailwind and
            Bootstrap. Skilled in developing clean and maintainable code, collaborating in agile
            teams, and continuously learning new technologies to deliver high-quality user experiences.
          </p>
        </div>

        {/* Personal Statement */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#FFD700] mb-2">Personal Statement</h2>
          <p>
            A frontend developer passionate about learning with skills in React.js, Redux, Context API,
            and other web development technologies. Highly capable of teamwork, eager to tackle
            innovative and challenging projects.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg scroll-mt-20" id="projects">
          <h2 className="text-2xl font-semibold text-[#FFD700] mb-4">Technical Skills</h2>
          <ul className="grid grid-cols-2 gap-y-2 list-disc list-inside">
            <li>JavaScript - Intermediate</li>
            <li>Bootstrap - Intermediate</li>
            <li>Tailwind CSS - Intermediate</li>
            <li>React.js - Beginner</li>
          </ul>
        </div>

        {/* Personal Skills */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg " >
          <h2 className="text-2xl font-semibold text-[#FFD700] mb-4">Personal Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Problem solving and idea generation (SADAF PLAN)</li>
            <li>Project management and teamwork (SADAF PLAN)</li>
            <li>Languages: English (Intermediate)</li>
          </ul>
        </div>

        {/* Education */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#FFD700] mb-4 flex items-center gap-2"><FaUserGraduate /> Education</h2>
          <p className="font-medium">University, North Tehran Branch</p>
          <p>Bachelor’s Degree in Software Engineering (2020 - 2022)</p>
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center mt-12">
        <a
          href="/Mohammad Aslani Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4169E1] text-white hover:bg-[#274bb5] transition font-semibold"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
