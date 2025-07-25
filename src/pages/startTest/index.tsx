import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface SubjectWithCode {
  subject: string;
  subcode: string;
}

export default function StartTest() {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<SubjectWithCode>({
    subcode: "",
    subject: "",
  });
  const [subjects, setSubjects] = useState<SubjectWithCode[]>([]);
  const startTest = () => {
    if (selectedSubject.subcode === "" || selectedSubject.subject === "")
      throw Error("Please select a subject");

    if (selectedSubject) {
      navigate({
        pathname: "/mocktest",
        search:
          "?subjectCode=" +
          selectedSubject.subcode +
          "&subjectName=" +
          selectedSubject.subject,
      });
    } else {
      alert("Please select a subject before proceeding.");
    }
  };

  function handleSubjectSelect(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
    const code = button.dataset.code;
    const name = button.dataset.name;
    if (code == undefined || name == undefined)
      throw Error("Something Went Wrong, try to select a subject again");
    setSelectedSubject({ subject: name, subcode: code });
  }

  async function fetchAllSubjects() {
    const res = await axios.get(
      "https://dapi-0rv5.onrender.com/v1/aiexam/syllabus/subject-list",
    );
    const data = res.data as SubjectWithCode[];
    return data;
  }
  useEffect(() => {
    (async function () {
      const response = await fetchAllSubjects();
      setSubjects(response);
    })();
  }, []);

  return (
    <div className="antialiased selection:bg-cyan-200/60 text-slate-900 bg-white">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-100">
        <div
          className="mx-auto max-w-7xl h-16 px-6 lg:px-8 flex items-center justify-between"
          data-animate=""
        >
          <button
            role="anchor"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 font-semibold tracking-tight text-cyan-700 hover:text-cyan-800 transition-colors bg-transparent"
          >
            <ArrowLeft className="h-5 w-5 stroke-[1.5]" />
            Dashboard
          </button>
          <span className="font-medium text-slate-600">MMT</span>
        </div>
      </header>

      <main className="max-w-7xl lg:px-8 mr-auto ml-auto pt-14 pr-6 pb-14 pl-6 space-y-12">
        <section className="space-y-4" data-animate="">
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Select a subject
          </h1>
          <p className="text-slate-600 max-w-lg">
            Choose the subject you’d like to be tested on. You can only start
            the test once a subject is selected.
          </p>
        </section>

        <section
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-animate=""
        >
          {subjects.length > 0
            ? subjects.map((subject) => (
                <button
                  key={subject.subcode}
                  data-code={subject.subcode}
                  data-name={subject.subject}
                  className="subject-card group relative flex flex-col rounded-xl border border-slate-200 bg-white/80 hover:border-cyan-400 transition duration-150 p-6 text-left focus:outline-none"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleSubjectSelect(e)
                  }
                >
                  <h2 className="text-lg font-semibold tracking-tight">
                    {subject.subject}
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm leading-snug">
                    {subject.subcode.toUpperCase()}
                  </p>
                  <span className="absolute inset-0 rounded-xl ring-2 ring-cyan-500 opacity-0 pointer-events-none transition"></span>
                </button>
              ))
            : Array(6)
                .fill(0)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    className="flex flex-col space-y-2 rounded-xl border border-teal-200 bg-white/80 p-6 text-left focus:outline-none"
                  >
                    <Skeleton className="w-4/5 h-4 bg-teal-200"></Skeleton>
                    <Skeleton className="w-2/5 h-3 bg-teal-100"></Skeleton>
                  </Skeleton>
                ))}
        </section>

        <section data-animate="" className="text-center">
          <Button
            id="startBtn"
            className="inline-flex gap-2 disabled:opacity-40 disabled:cursor-not-allowed transition-colors hover:bg-cyan-700 focus:outline-none font-medium text-white bg-cyan-600 rounded-lg mt-8 pt-3 pr-6 pb-3 pl-6 items-center justify-center"
            onClick={startTest}
            disabled={selectedSubject.subject === ""}
          >
            <PlayCircle className="h-5 w-5 stroke-[1.5]" />
            Start test
          </Button>
          <p id="selectionHint" className="mt-3 text-sm text-slate-500">
            {selectedSubject.subject
              ? selectedSubject.subject
              : "No subject selected."}
          </p>
        </section>
      </main>
    </div>
  );
}

// <script>
//   const cards = document.querySelectorAll('.subject-card');
//   const startBtn = document.getElementById('startBtn');
//   const hint = document.getElementById('selectionHint');
//   let selectedCard = null;

//   cards.forEach(card => {
//     card.addEventListener('click', () => {
//       // Deselect previous
//       if (selectedCard && selectedCard !== card) {
//         selectedCard.querySelector('span').style.opacity = 0;
//         selectedCard.classList.remove('border-cyan-500');
//       }
//       // Toggle current
//       const ring = card.querySelector('span');
//       const isSelected = ring.style.opacity == 1;
//       ring.style.opacity = isSelected ? 0 : 1;
//       card.classList.toggle('border-cyan-500', !isSelected);

//       selectedCard = !isSelected ? card : null;

//       // Update button + hint
//       if (selectedCard) {
//         startBtn.disabled = false;
//         hint.textContent = `Selected: ${selectedCard.dataset.name}`;
//       } else {
//         startBtn.disabled = true;
//         hint.textContent = 'No subject selected.';
//       }
//     });
//   });

// </script>
