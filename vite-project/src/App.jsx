import  { useCallback, useRef, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [text , settext] = useState("")

   const textRef = useRef(null);

   const CopyText = useCallback(()=>{
    textRef.current?.select( );
    window.navigator.clipboard.writeText(text);
    //alert("Copied!");
   },[text])
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const countWord =()=>{
    const words = text.split(/\s+/);
    return words.filter(word => word !== "").length;
  }
  return (
    <div className={`w-auto h-screen duration-200 p-4 ${
        theme === "light" ? "bg-white" : "bg-black text-white"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`outline-none px-4 py-1 rounded-full float-end ${
          theme === "light" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>

      <div className=" mt-16 flex justify-center items-center">
        <h1 className=" font-semibold  text-4xl ">Convert Your Text</h1>
      </div>


      <div className="p-4 flex justify-center">
        <textarea 
        ref={textRef}
        value={text}
        onChange={(e)=>settext(e.target.value)}
        className={` font-semibold text-xl border-[3px] border-black md:w-[1050px] w-[700px] px-2 h-48 rounded-md text-start ${
          theme === "light" ? " text-black" : "bg-gray-400 text-black"
        }` }
        placeholder="Enter your text here..." >
        </textarea>
      </div>

      <div className="mt-1 flex justify-center gap-2 ">
        <button 
        onClick={()=>settext(text.toUpperCase())}
         className="md:px-4 md:py-2 bg-orange-400 text-white md:rounded-3xl md:text-xl text-sm rounded-md">
          Convert in Capital
        </button>
        <button 
        onClick={()=>settext(text.toLowerCase())}
        className=" md:px-4 md:py-2 bg-sky-700 text-white md:rounded-3xl md:text-xl text-sm rounded-md">
          Convert in Smaill
        </button>
        <button 
        onClick={()=>settext(text.toUpperCase())}
        className=" md:px-4 md:py-2 bg-gray-800 text-white md:rounded-3xl md:text-xl text-sm rounded-md">
          Convert in Captalize
        </button>
        <button 
        onClick={()=> settext("")}
        className=" md:px-4 md:py-2 bg-green-600 text-white md:rounded-3xl md:text-xl text-sm rounded-md">
          Remove Your Text
        </button>
        <button 
        onClick={CopyText}
        className=" md:px-4 md:py-2 bg-red-800 text-white md:rounded-3xl md:text-xl text-sm rounded-md">
          Copy To Clippboard
        </button>
    </div>


    <h1 className=" mt-4 flex justify-center text-3xl font-semibold">Albhabets:{text.length}</h1>
    <h1 className=" mt-2 flex justify-center text-3xl font-semibold">Words: {countWord(text)}</h1>

    </div>
  );
}

export default App;