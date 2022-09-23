export function FilterStripe() {
  const list = Array.from(Array(6)).map((_, idx) => idx);
  return (
    <div className="shadow-md md:shadow-none">
      <div className="container mt-2 flex justify-between">
        {list.map((item) => (
          <div
            key={item}
            className="text-black/60 hover:text-black py-4 border-b-2 hover:border-black border-transparent cursor-pointer  flex flex-col justify-center items-center p-"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>
            <p className="text-sm font-medium">Yurts</p>
          </div>
        ))}
      </div>
    </div>
  );
}
