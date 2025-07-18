
// import React, { useEffect, useState } from 'react';

// const Loader = () => {
//   const [hide, setHide] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setHide(true);
//     }, 2500); // 2.5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (hide) return null;

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-[9999] transition-opacity duration-700 ease-in-out">
//       <h1 className="text-5xl font-bold text-white animate-pulse tracking-wide">
//         <span className="text-red-500">🎤</span> kyabaat<span className="text-red-500">farm</span>
//       </h1>
//     </div>
//   );
// };

// export default Loader;