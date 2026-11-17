import React from 'react';


const StudentCard = ({ student }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full max-w-sm">
      
      {/* Student Image */}
      <div className="flex justify-center mb-4">
        <img 
          src={student.image} 
          alt={student.name} 
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100 shadow-sm"
        />
      </div>

      {/* Student Info */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
        <p className="text-indigo-600 font-semibold mb-2">{student.course}</p>
        <p className="text-gray-500 text-sm mb-4">{student.college}</p>
      </div>

      {/* Other Details */}
      <div className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl mb-4">
        <p><span className="font-semibold text-gray-800">Age:</span> {student.age}</p>
        <p><span className="font-semibold text-gray-800">Email:</span> {student.email}</p>
        <p><span className="font-semibold text-gray-800">Phone:</span> {student.phone}</p>
      </div>

      {/* Skills List */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Skills:</h3>
        <ul className="flex flex-wrap gap-2">
          {student.skills.map((skill, index) => (
            <li key={index} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default StudentCard;