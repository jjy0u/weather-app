import searchLogo from "../../assets/images/magnifying-glass.png"
import "./SearchFilter.scss"

const SearchFilter = (props) => {

    const {handleInput, handleSearchTerm} = props

    return(
        <form className="search" onSubmit={handleInput}>
            <label htmlFor="search-bar" >
                <img className="search__logo" src={searchLogo} alt="" />
            </label>
            <input className="search__input" type="text" id="search-bar" placeholder="Enter Location..." onChange={handleSearchTerm}/>
        </form>
    )
}

export default SearchFilter