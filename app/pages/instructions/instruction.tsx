export default function Instructions() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
    <div id="instructions-container" className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-2xl">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Instructions</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Read each question carefully.</li>
        <li>Select the best possible answer from the given options.</li>
        <li>You cannot go back to a previous question once you have moved to the next.</li>
        <li>The test duration is 30 minutes.</li>
        <li>The timer will start as soon as you begin the test.</li>
        <li>Once the time is up, the test will be submitted automatically.</li>
        <li>Do not refresh or close the browser window during the test.</li>
        <li>Your answers will be saved automatically as you proceed.</li>
      </ul>
      <div className="flex justify-end">
        <button id="start-quiz-button" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-150 ease-in-out">
          Start Quiz
        </button>
        <button id="back-to-subject-button" className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out">
          Back
        </button>
      </div>
    </div>
</main>
  )
}

