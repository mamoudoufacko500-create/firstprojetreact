interface UserButtonProps {
    text?:string;
    className?:string;
    link?:string;
}
export default function UserButton({text,className}:UserButtonProps) {
  return (
    <button className={`${className} bg-yellow-300 rounded-xl px-5 py-3 text-gray-500 text-sm hover:bg-gray-800 hover:text-yellow-300 hover:scale-105 transition duration-500`}>
      <a href="#">{text || "Mon button"}</a>
    </button>
  )
}
