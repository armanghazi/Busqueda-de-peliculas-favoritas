import { config } from '../utils/config.js';

export function createMovieCard(movie, isFavorite) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    const posterPath = movie.poster_path
        ? `${config.IMAGE_BASE_URL}${movie.poster_path}`
        : config.DEFAULT_POSTER;

    const overview = movie.overview || 'No overview available.';
    const tmdbUrl = `https://www.themoviedb.org/movie/${movie.id}`;
    const releaseDate = formatDate(movie.release_date);

    movieCard.innerHTML = `
        <img class="movie-poster" src="${posterPath}" alt="${movie.title}">
        <div class="movie-info">
            <div class="movie-header">
                <h3 class="movie-title">${movie.title}</h3>
                <button class="favorite-button ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${movie.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <p class="movie-rating">Promedio de votos: ${movie.vote_average.toFixed(2)}/10</p>
            <p class="release-date">Fecha de lanzamiento: ${releaseDate}</p>
            <div class="movie-overview">
                <h4>Descripción general:</h4>
                <p>${overview}</p>
            </div>
            <a href="${tmdbUrl}" target="_blank" class="tmdb-button">
                <i class="fas fa-external-link-alt"></i> Ver en TMDB
            </a>
        </div>
    `;

    return movieCard;
}

function formatDate(dateString) {
    if (!dateString) return 'No date available';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(config.LANGUAGE, options);
}