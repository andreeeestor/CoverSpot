export default function Button({text, icon, className, onClick}) {
  return (
    <button
      type="submit"
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-[#18A0FB] px-4 py-2 font-semibold
        uppercase text-[#18A0FB] transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-[#18A0FB]
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-white
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95 ${className}`}
        onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
