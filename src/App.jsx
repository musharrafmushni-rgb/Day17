import React from 'react';
import StudentCard from './components/StudentCard';


// உங்கள் assets/image ஃபோல்டரில் இருந்து படங்களை Import செய்யவும்
import ima1 from './assets/image/ima1.jpeg'; 
import ima2 from './assets/image/ima2.jpg';

function App() {
  // 3 வெவ்வேறு மாணவர்களின் டேட்டா (Objects)
  const studentsData = [
    {
      name: "M M MUSHNI",
      age: 22,
      course: "React JS",
      email: "john@example.com",
      phone: "0771234567",
      college: "ABC Institute",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      image: ima2
    },
    {
      name: "M F Sarah",
      age: 18,
      course: "UI/UX Design",
      email: "sarah@example.com",
      phone: "0779876543",
      college: "XYZ University",
      skills: ["Figma", "Adobe XD", "CSS", "Prototyping"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "M F MUNA",
      age: 23,
      course: "Full Stack Dev",
      email: "mushni@example.com",
      phone: "0761122334",
      college: "Tech Academy",
      skills: ["Node.js", "React", "MongoDB", "Express"],
      image: ima1 // உங்கள் local image ஐ பயன்படுத்துகிறோம்
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Student Profiles</h1>
      
      {/* Grid Layout-ல் 3 கார்டுகளையும் காட்டுகிறோம் */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {studentsData.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;