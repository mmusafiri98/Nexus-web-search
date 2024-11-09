import './index.css';
import { Component } from 'react';
import SuggestionItem from '../SuggestionItem';

class NexusSuggestions extends Component {
    state = {
        searchInput: '',
    };

    updateSearchInput = suggestion => {
        this.setState({ searchInput: suggestion });
    };

    onChangeInputSearch = event => {
        this.setState({ searchInput: event.target.value });
    };

    onSubmitSearch = event => {
        event.preventDefault();

        const { searchInput } = this.state;

        // Vérifier si l'utilisateur recherche un article sur Amazon
        if (searchInput.toLowerCase().includes("amazon")) {
            const amazonSearchQuery = searchInput.replace("amazon", "").trim();
            const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(amazonSearchQuery)}`;
            window.location.href = amazonSearchUrl;

            // Vérifier si l'utilisateur recherche un article sur Wikipedia
        } else if (searchInput.toLowerCase().includes("wikipedia")) {
            const wikipediaSearchQuery = searchInput.replace("wikipedia", "").trim();
            const wikipediaSearchUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(wikipediaSearchQuery)}`;
            window.location.href = wikipediaSearchUrl;

            // Vérifier si l'utilisateur recherche un article sur YouTube
        } else if (searchInput.toLowerCase().includes("youtube")) {
            const youtubeSearchQuery = searchInput.replace("youtube", "").trim();
            const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(youtubeSearchQuery)}`;
            window.location.href = youtubeSearchUrl;

            // Vérifier si l'utilisateur recherche un article sur Instagram
        } else if (searchInput.toLowerCase().includes("instagram")) {

            const instagramSearchQuery = searchInput.replace("instagram", "").trim();
            let instagramSearchUrl;
            if (instagramSearchQuery.startsWith("#")) {
                // Recherche par hashtag
                instagramSearchUrl = `https://www.instagram.com/explore/tags/${encodeURIComponent(instagramSearchQuery.slice(1))}/`;
            } else if (instagramSearchQuery.startsWith("@")) {
                // Recherche par utilisateur
                instagramSearchUrl = `https://www.instagram.com/${encodeURIComponent(instagramSearchQuery.slice(1))}/`;
            } else {
                // Page d'accueil d'Instagram si la recherche n'est ni un hashtag ni un utilisateur
                instagramSearchUrl = `https://www.instagram.com`;
            }
            window.location.href = instagramSearchUrl;
            // Vérifier si l'utilisateur recherche un article sur YouTube


            // Si aucune condition précédente n'est remplie
        } else {
            console.log('Search submitted:', searchInput);
        }
    };





    render() {
        const { suggestionsList } = this.props;
        const { searchInput } = this.state;

        // Filtrer les suggestions en fonction de l'input de recherche
        const searchResult = suggestionsList.filter(eachSuggestion =>
            eachSuggestion.suggestion
                .toLowerCase()
                .includes(searchInput.toLowerCase())
        );

        return (
            <div className="app-container">
                <div className="Nexus-container">
                    <img
                        className="Nexus-image"
                        src="Nexus.png"
                        alt="Nexus Logo"
                    />
                    <div className="search-container">
                        <form className="input-search-container" onSubmit={this.onSubmitSearch}>

                            <input
                                type="search"
                                className="input-search-element"
                                placeholder="Search Nexus web"
                                value={searchInput}
                                onChange={this.onChangeInputSearch}
                            />
                            {/* Bouton Submit */}
                            <button type="submit" className="submit-button">
                                Submit
                            </button>
                        </form>

                        {/* Afficher les suggestions uniquement si searchInput n'est pas vide */}
                        {searchInput && (
                            <ul className="Nexus-search-items">
                                {searchResult.map(eachSearch => (
                                    <SuggestionItem
                                        key={eachSearch.id}
                                        searchInfo={eachSearch}
                                        updateSearchInput={this.updateSearchInput}
                                    />
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default NexusSuggestions;
