import { Button } from "~/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';

interface SubjectWithCode {
  subject: string;
  subcode: string;
}

export function Welcome() {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string>('')
  const [subjects, setSubjects] = useState<SubjectWithCode[]>([]);
  const handleInstructionsButtonClick = () => {
    const subjectName: SubjectWithCode[] = subjects.filter(value => value.subcode == selectedSubject)
   
    if (selectedSubject) {
      navigate(
        {
          pathname: '/mocktest',
          search: '?subjectCode=' + selectedSubject + '&subjectName=' + subjectName[0].subject,
        }
      );
    } else {
      alert("Please select a subject before proceeding.");
    }
  };

  async function fetchAllSubjects() {
    const res = await axios.get('https://dapi-0rv5.onrender.com/v1/aiexam/syllabus/subject-list');
    const data = res.data as SubjectWithCode[];
    return data;
  }
  useEffect(()=>{
    (async function(){
      const response = await fetchAllSubjects();
      setSubjects(response);
    })()
  },[])

  return (
    <main className="background min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div id="welcome-container" className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-3xl">
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Mock Test Platform</h1>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">Welcome to the Mock Test Platform. Please select a subject to begin your practice test.</p>

            <div className="mb-6">
              <label htmlFor="subject-selector" className="block text-sm font-medium text-gray-700 mb-2">Select Subject:</label>
              <Select id="subject-selector" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onValueChange={(value) => {
                  setSelectedSubject(value);
                }}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  {
                    subjects.length > 0 ?(
                      subjects.map(subject => (
                        <SelectItem value={subject.subcode} key={subject.subject}>{subject.subject}</SelectItem>
                      ))
                    ): (<SelectItem value="loading">Please Wait while loading</SelectItem>)
                  }
                  {/* <SelectItem value="dsa">Data Structures & Algorithms</SelectItem>
                  <SelectItem value="java">OOPs with JAVA</SelectItem>
                  <SelectItem value="os">Operating Systems</SelectItem>
                  <SelectItem value="networking">Computer Networks</SelectItem>
                  <SelectItem value="cybersecurity">Cyber Security</SelectItem> */}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-center">
            <Button id="instructions-button" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-md transition duration-150 ease-in-out"
              onClick={handleInstructionsButtonClick}>
              Continue to Test
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
