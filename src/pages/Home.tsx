import FullProfilePicture from "../components/FullProfilePicture"
import CompanyInformation from "../components/CompanyInformation"

export function Home() {
    return (
        <div>
            <div className="grid grid-cols-1">
                <div className="text-start mr-12 ml-7">
                    <FullProfilePicture />
                    <CompanyInformation />
                </div>
            </div>
        </div>
    )
}

export default Home