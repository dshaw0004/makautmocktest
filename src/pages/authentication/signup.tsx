import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, ArrowRight, LogIn } from "lucide-react";

interface FormData {
  // Step 1 - Login
  email: string;
  password: string;
  captcha: boolean;

  // Step 2 - Personal Details
  name: string;
  phone: string;
  field: string;
  semester: string;
  courseDuration: string;

  // Step 3 - Institute Details
  instituteName: string;
  city: string;
  state: string;
  boardName: string;
}

const fieldOptions = [
  // "B.Tech",
  // "B.E.",
  // "M.Tech",
  // "M.E.",
  "MCA",
  // "BCA",
  // "B.Sc",
  // "M.Sc",
  // "MBA",
  // "BBA",
  // "B.Com",
  // "M.Com",
  // "Other",
];

const semesterOptions = [
  "1st Semester",
  "2nd Semester",
  "3rd Semester",
  "4th Semester",
  // "5th Semester",
  // "6th Semester",
  // "7th Semester",
  // "8th Semester",
];

const courseDurationOptions = [
  // "1 Year",
  "2 Years",
  // "3 Years",
  // "4 Years"
];

const boardSuggestions = [
  "Autonomous",
  "MAKAUT(Maulana Abdul Kalam Azad University of Technology)",
];

const stateOptions = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function StudentLogin() {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>();

  const stepTitles = ["Student Login", "Personal Details", "Institute Details"];

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
    alert("Login form submitted successfully!");
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Handle Google OAuth here
    alert("Google login clicked - implement OAuth flow");
  };

  const createAccount = () => {
    // TODO: implement account creation
    // go to next step if successful
    nextStep();
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];

    if (currentStep === 1) {
      fieldsToValidate = ["email", "password", "captcha"];
    } else if (currentStep === 2) {
      fieldsToValidate = [
        "name",
        "phone",
        "field",
        "semester",
        "courseDuration",
      ];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="antialiased text-slate-900 bg-slate-50 selection:bg-cyan-200/60">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-100">
        <div className="max-w-7xl h-16 mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#"
            className="inline-flex items-center gap-1 font-semibold tracking-tight text-cyan-700 hover:text-cyan-800 transition"
          >
            MMT
          </a>
        </div>
      </header>

      <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2.5 w-2.5 rounded-full ${
                  step === currentStep ? "bg-cyan-600" : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          <h1 className="text-center text-3xl font-semibold tracking-tight">
            {stepTitles[currentStep - 1]}
          </h1>

          <div className="space-y-6 bg-white/90 border border-slate-200 rounded-xl p-8 shadow-sm overflow-hidden">
            {/* Step 1: Login */}
            {currentStep === 1 && (
              <div className="space-y-6">
                {/* Google Login Button */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium px-4 py-2.5 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-500">
                      Or continue with email
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Student Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="student@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("captcha", {
                        required: "Please verify you're not a robot",
                      })}
                      className="peer sr-only"
                    />
                    <span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-cyan-600">
                      <svg
                        className="h-3 w-3 text-white opacity-0 peer-checked:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path d="m5 13 4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-slate-600">
                      I'm not a robot
                    </span>
                  </label>
                  {errors.captcha && (
                    <p className="text-red-500 text-xs">
                      {errors.captcha.message}
                    </p>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={createAccount}
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-4 py-2.5 transition"
                    >
                      Next
                      <ArrowRight className="h-4 w-4 stroke-[1.5]" />
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="field"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Field of Study
                  </label>
                  <select
                    id="field"
                    {...register("field", {
                      required: "Field of study is required",
                    })}
                    className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                  >
                    <option value="">Select field</option>
                    {fieldOptions.map((field) => (
                      <option key={field} value={field}>
                        {field}
                      </option>
                    ))}
                  </select>
                  {errors.field && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.field.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="semester"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Current Semester
                  </label>
                  <select
                    id="semester"
                    {...register("semester", {
                      required: "Semester is required",
                    })}
                    className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                  >
                    <option value="">Select semester</option>
                    {semesterOptions.map((sem) => (
                      <option key={sem} value={sem}>
                        {sem}
                      </option>
                    ))}
                  </select>
                  {errors.semester && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.semester.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="courseDuration"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Total Course Duration
                  </label>
                  <select
                    id="courseDuration"
                    {...register("courseDuration", {
                      required: "Course duration is required",
                    })}
                    className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                  >
                    <option value="">Select duration</option>
                    {courseDurationOptions.map((duration) => (
                      <option key={duration} value={duration}>
                        {duration}
                      </option>
                    ))}
                  </select>
                  {errors.courseDuration && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.courseDuration.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium px-4 py-2.5 transition"
                  >
                    <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-4 py-2.5 transition"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 stroke-[1.5]" />
                  </button>
                </div>
              </div>
            )}
            {/* Step 3: Institute Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="instituteName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Institute Name
                  </label>
                  <input
                    id="instituteName"
                    type="text"
                    placeholder="Enter institute name"
                    {...register("instituteName", {
                      required: "Institute name is required",
                    })}
                    className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                  />
                  {errors.instituteName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.instituteName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Enter city"
                    {...register("city", { required: "City is required" })}
                    className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    State
                  </label>
                  <select
                    id="state"
                    {...register("state", { required: "State is required" })}
                    className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                  >
                    <option value="">Select state</option>
                    {stateOptions.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.state.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="boardName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Board/Affiliation
                  </label>
                  <input
                    list="boards"
                    id="boardName"
                    type="text"
                    placeholder="Select or type board/affiliation"
                    {...register("boardName", {
                      required: "Board/Affiliation is required",
                    })}
                    className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
                  />
                  <datalist id="boards">
                    {boardSuggestions.map((board) => (
                      <option key={board} value={board} />
                    ))}
                  </datalist>
                  {errors.boardName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.boardName.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium px-4 py-2.5 transition"
                  >
                    <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
                    Back
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-4 py-2.5 transition"
                  >
                    <LogIn className="h-5 w-5 stroke-[1.5]" />
                    Login
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="text-center text-sm text-slate-600">
            New student?&npsp;
            <a
              href="#"
              className="font-medium text-cyan-600 hover:text-cyan-700"
            >
              Create account
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { ArrowLeft, ArrowRight, LogIn } from "lucide-react";

// interface FormData {
//   // Step 1 - Login
//   email: string;
//   password: string;
//   captcha: boolean;

//   // Step 2 - Personal Details
//   name: string;
//   phone: string;
//   field: string;
//   semester: string;
//   courseDuration: string;

//   // Step 3 - Institute Details
//   instituteName: string;
//   city: string;
//   state: string;
//   boardName: string;
// }

// const fieldOptions = [
//   // "B.Tech",
//   // "B.E.",
//   // "M.Tech",
//   // "M.E.",
//   "MCA",
//   // "BCA",
//   // "B.Sc",
//   // "M.Sc",
//   // "MBA",
//   // "BBA",
//   // "B.Com",
//   // "M.Com",
//   // "Other",
// ];

// const semesterOptions = [
//   "1st Semester",
//   "2nd Semester",
//   "3rd Semester",
//   "4th Semester",
//   // "5th Semester",
//   // "6th Semester",
//   // "7th Semester",
//   // "8th Semester",
// ];

// const courseDurationOptions = [
//   // "1 Year",
//   "2 Years",
//   // "3 Years",
//   // "4 Years"
// ];

// const boardSuggestions = [
//   "Autonomous",
//   "MAKAUT(Maulana Abdul Kalam Azad University of Technology)",
// ];

// const stateOptions = [
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chhattisgarh",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal",
// ];

// export default function StudentLogin() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//     trigger,
//   } = useForm<FormData>();

//   const stepTitles = ["Student Login", "Personal Details", "Institute Details"];

//   const onSubmit = (data: FormData) => {
//     console.log("Form submitted:", data);
//     // Handle form submission here
//     alert("Login form submitted successfully!");
//   };

//   const nextStep = async () => {
//     let fieldsToValidate: (keyof FormData)[] = [];

//     if (currentStep === 1) {
//       fieldsToValidate = ["email", "password", "captcha"];
//     } else if (currentStep === 2) {
//       fieldsToValidate = [
//         "name",
//         "phone",
//         "field",
//         "semester",
//         "courseDuration",
//       ];
//     }

//     const isValid = await trigger(fieldsToValidate);
//     if (isValid) {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const prevStep = () => {
//     setCurrentStep((prev) => prev - 1);
//   };

//   return (
//     <div className="antialiased text-slate-900 bg-slate-50 selection:bg-cyan-200/60">
//       <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-100">
//         <div className="max-w-7xl h-16 mx-auto px-6 lg:px-8 flex items-center justify-between">
//           <a
//             href="#"
//             className="inline-flex items-center gap-1 font-semibold tracking-tight text-cyan-700 hover:text-cyan-800 transition"
//           >
//             MMT
//           </a>
//         </div>
//       </header>

//       <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* Progress Dots */}
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3].map((step) => (
//               <div
//                 key={step}
//                 className={`h-2.5 w-2.5 rounded-full ${
//                   step === currentStep ? "bg-cyan-600" : "bg-slate-300"
//                 }`}
//               />
//             ))}
//           </div>

//           <h1 className="text-center text-3xl font-semibold tracking-tight">
//             {stepTitles[currentStep - 1]}
//           </h1>

//           <div className="space-y-6 bg-white/90 border border-slate-200 rounded-xl p-8 shadow-sm overflow-hidden">
//             {/* Step 1: Login */}
//             {currentStep === 1 && (
//               <div className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Student Email
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="student@example.com"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                         message: "Invalid email address",
//                       },
//                     })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Password
//                   </label>
//                   <input
//                     id="password"
//                     type="password"
//                     {...register("password", {
//                       required: "Password is required",
//                       minLength: {
//                         value: 6,
//                         message: "Password must be at least 6 characters",
//                       },
//                     })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   />
//                   {errors.password && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.password.message}
//                     </p>
//                   )}
//                 </div>

//                 <label className="inline-flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     {...register("captcha", {
//                       required: "Please verify you're not a robot",
//                     })}
//                     className="peer sr-only"
//                   />
//                   <span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-cyan-600">
//                     <svg
//                       className="h-3 w-3 text-white opacity-0 peer-checked:opacity-100"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="3"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="m5 13 4 4L19 7"></path>
//                     </svg>
//                   </span>
//                   <span className="text-sm font-medium text-slate-600">
//                     I'm not a robot
//                   </span>
//                 </label>
//                 {errors.captcha && (
//                   <p className="text-red-500 text-xs">
//                     {errors.captcha.message}
//                   </p>
//                 )}

//                 <div className="flex justify-end">
//                   <button
//                     type="button"
//                     onClick={nextStep}
//                     className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-4 py-2.5 transition"
//                   >
//                     Next
//                     <ArrowRight className="h-4 w-4 stroke-[1.5]" />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Step 2: Personal Details */}
//             {currentStep === 2 && (
//               <div className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     placeholder="John Doe"
//                     {...register("name", { required: "Name is required" })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   />
//                   {errors.name && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.name.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     id="phone"
//                     type="tel"
//                     placeholder="+91 98765 43210"
//                     {...register("phone", {
//                       required: "Phone number is required",
//                     })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   />
//                   {errors.phone && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.phone.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="field"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Field of Study
//                   </label>
//                   <select
//                     id="field"
//                     {...register("field", {
//                       required: "Field of study is required",
//                     })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   >
//                     <option value="">Select field</option>
//                     {fieldOptions.map((field) => (
//                       <option key={field} value={field}>
//                         {field}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.field && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.field.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="semester"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Current Semester
//                   </label>
//                   <select
//                     id="semester"
//                     {...register("semester", {
//                       required: "Semester is required",
//                     })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   >
//                     <option value="">Select semester</option>
//                     {semesterOptions.map((sem) => (
//                       <option key={sem} value={sem}>
//                         {sem}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.semester && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.semester.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="courseDuration"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Total Course Duration
//                   </label>
//                   <select
//                     id="courseDuration"
//                     {...register("courseDuration", {
//                       required: "Course duration is required",
//                     })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   >
//                     <option value="">Select duration</option>
//                     {courseDurationOptions.map((duration) => (
//                       <option key={duration} value={duration}>
//                         {duration}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.courseDuration && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.courseDuration.message}
//                     </p>
//                   )}
//                 </div>

//                 <div className="flex justify-between">
//                   <button
//                     type="button"
//                     onClick={prevStep}
//                     className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium px-4 py-2.5 transition"
//                   >
//                     <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
//                     Back
//                   </button>
//                   <button
//                     type="button"
//                     onClick={nextStep}
//                     className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-4 py-2.5 transition"
//                   >
//                     Next
//                     <ArrowRight className="h-4 w-4 stroke-[1.5]" />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Step 3: Institute Details */}
//             {currentStep === 3 && (
//               <div className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="instituteName"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Institute Name
//                   </label>
//                   <input
//                     id="instituteName"
//                     type="text"
//                     placeholder="Enter institute name"
//                     {...register("instituteName", {
//                       required: "Institute name is required",
//                     })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   />
//                   {errors.instituteName && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.instituteName.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="city"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     City
//                   </label>
//                   <input
//                     id="city"
//                     type="text"
//                     placeholder="Enter city"
//                     {...register("city", { required: "City is required" })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   />
//                   {errors.city && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.city.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="state"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     State
//                   </label>
//                   <select
//                     id="state"
//                     {...register("state", { required: "State is required" })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   >
//                     <option value="">Select state</option>
//                     {stateOptions.map((state) => (
//                       <option key={state} value={state}>
//                         {state}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.state && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.state.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="boardName"
//                     className="block text-sm font-medium text-slate-700 mb-1"
//                   >
//                     Board/Affiliation
//                   </label>
//                   <input
//                     list="boards"
//                     id="boardName"
//                     type="text"
//                     placeholder="Select or type board/affiliation"
//                     {...register("boardName", {
//                       required: "Board/Affiliation is required",
//                     })}
//                     className="w-full rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 px-3 py-2 text-sm bg-white"
//                   />
//                   <datalist id="boards">
//                     {boardSuggestions.map((board) => (
//                       <option key={board} value={board} />
//                     ))}
//                   </datalist>
//                   {errors.boardName && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.boardName.message}
//                     </p>
//                   )}
//                 </div>

//                 <div className="flex justify-between">
//                   <button
//                     type="button"
//                     onClick={prevStep}
//                     className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium px-4 py-2.5 transition"
//                   >
//                     <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
//                     Back
//                   </button>
//                   <button
//                     type="submit"
//                     onClick={handleSubmit(onSubmit)}
//                     className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-4 py-2.5 transition"
//                   >
//                     <LogIn className="h-5 w-5 stroke-[1.5]" />
//                     Login
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           <p className="text-center text-sm text-slate-600">
//             Already a student?{" "}
//             <a
//               href="#"
//               className="font-medium text-cyan-600 hover:text-cyan-700"
//             >
//               Get In
//             </a>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }
