import UsersInvitation from "./imports/UsersInvitation-7-749";

export default function App() {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .email-container {
            transform: scale(calc((100vw - 2rem) / 600));
            transform-origin: top center;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-100 py-4 sm:py-8">
        {/* Responsive wrapper */}
        <div className="w-full flex justify-center px-4 sm:px-0">
          {/* Scaling container for mobile */}
          <div className="relative">
            {/* Email template at fixed 600px width */}
            <div className="email-container w-[600px] h-[1380px] bg-white shadow-lg">
              <UsersInvitation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
