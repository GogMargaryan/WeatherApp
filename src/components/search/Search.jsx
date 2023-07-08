import { BsSearch } from "react-icons/bs"

// Weather-App-SearchPart
const Search = ({ location, setLocation, getData }) => {

    return (
        <div className="container-search">
            <input
                type="text"
                placeholder="Enter Location..."
                value={location}
                onChange={event => setLocation(event.target.value.trim())}
            />
            <button onClick={() => {
                getData();
                setLocation("")
            }}>
                <BsSearch />
            </button>
        </div>
    )
}

export default Search;