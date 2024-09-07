import {
    MdOutlineBusinessCenter,
    MdOutlinePersonSearch,
    MdBusiness,
    MdOutlineReceiptLong,
    MdOutlineNewspaper,
    MdOutlineMessage,
    MdOutlineSearch,
    MdFmdBad
} from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";

export const sidebarLinks = [
    { text: 'Poslovanje', link: '/', id: '1', icon: MdOutlineBusinessCenter, color: 'bg-transparent'},
    { text: 'Zaposlenici', link: 'employees', id: '2', icon: MdOutlinePersonSearch, color: 'bg-transparent' },
    { text: 'Financije', link: '', id: '3', icon: MdBusiness, color: 'bg-transparent' },
    { text: 'Računi', link: '', id: '4', icon: MdOutlineReceiptLong, color: 'bg-transparent' },
    { text: 'Ugovori', link: '', id: '5', icon: MdOutlineNewspaper, color: 'bg-transparent' },
    { text: 'Poruke', link: '', id: '6', icon: MdOutlineMessage, color: 'bg-transparent' },
    { text: 'Konkurenti', link: '', id: '7', icon: MdFmdBad, color: 'bg-transparent' },
    { text: 'Pretraživanje', link: '', id: '8', icon: MdOutlineSearch, color: 'bg-transparent' },
    { text: 'Odjava', link: '', id: '8', icon: PiSignOutBold, color: 'bg-orange-100' }
]

