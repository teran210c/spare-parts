import icon from "../assets/PEGATRON_logo.png"
import user from "../assets/user_icon.png"

export default function Navbar() {
    const imgUrl = icon
    const userIcon = user

    return (
        <div className="bg-gray-800 w-full h-full">
            <img className="h-full p-2.5 invert" src={icon} alt="Logo_Pegatron" />
            
            

        </div >
    )
}