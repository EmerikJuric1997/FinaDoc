export function NavbarComponent() {
    return (
        <div className="w-full bg-gray-100 shadow-md h-8 fixed draggable absolute">
            <img
                src="../src/assets/finaDocLogo.png"
                className="h-6 ml-2 pt-2"
                alt="FinaDoc logo" />        
        </div>
    );
}

export default NavbarComponent();