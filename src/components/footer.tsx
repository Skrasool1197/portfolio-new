// import { DATA } from "@/data/resume";

// export default function Footer() {
//     return (
//         <footer className="mb-16 pt-2 pb-12 flex flex-col items-center justify-center gap-4 px-4 text-center">
//             <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-4" />
//             {/* <p className="text-lg font-medium text-muted-foreground/60 max-w-2xl px-4 inline-block transition-all duration-300 hover:scale-105 hover:rotate-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:via-gray-500 hover:to-blue-500 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] cursor-default">
//                 Designing scalable ML and LLM systems for real-world applications and high-performance production environments.
//             </p> */}


//             <p className="text-lg sm:text-xl font-semibold 
// text-transparent bg-clip-text 
// bg-gradient-to-r from-gray-300 via-gray-500 to-blue-500
// drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]
// max-w-2xl px-4 mb-28 inline-block">
//                 Designing scalable ML and LLM systems for real-world applications and high-performance production environments.
//             </p>
//             <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-10" />

//             <p className="text-sm text-muted-foreground">
//                 © {new Date().getFullYear()} {DATA.name}. All rights reserved.
//             </p>
//         </footer>
//     );
// }



import { DATA } from "@/data/resume";

export default function Footer() {
    return (
        <footer className="mb-16 pt-2 pb-12 flex flex-col items-center justify-center gap-4 px-4 text-center">

            {/* Top divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-10" />

            {/* Statement */}
            <p className="text-lg sm:text-xl font-semibold 
      text-transparent bg-clip-text 
      bg-gradient-to-r from-gray-300 via-gray-500 to-blue-500
      drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]
      max-w-2xl px-4 mb-10 inline-block
      transition-all duration-300 cursor-default
      hover:scale-110 hover:rotate-0
      hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]
      hover:from-gray-200 hover:to-blue-400">
                Designing scalable ML and LLM systems for real-world applications and high-performance production environments.
            </p>

            {/* Bottom divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-28" />

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {DATA.name}. All rights reserved.
            </p>

        </footer>
    );
}
