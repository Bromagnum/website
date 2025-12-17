import Image from "next/image"

export default function Logo() {
    
  return (
    <div className="h-10 w-10 relative">
      <Image
        src="/logo.png"
        alt="Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}