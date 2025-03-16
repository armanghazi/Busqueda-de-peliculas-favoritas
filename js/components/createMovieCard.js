import { config } from '../utils/config.js';
import { isFavorite } from './toggleFavorite.js';

export function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    const posterPath = movie.poster_path
        ? `${config.IMAGE_BASE_URL}${movie.poster_path}`
        : config.DEFAULT_POSTER;

    const overview = movie.overview || 'No overview available.';
    const tmdbUrl = `https://www.themoviedb.org/movie/${movie.id}`;
    const releaseDate = formatDate(movie.release_date);
    const isMovieFavorite = isFavorite(movie.id);

    // Crear el botón de favoritos como un elemento separado
    const favoriteButton = document.createElement('button');
    favoriteButton.className = `favorite-button ${isMovieFavorite ? 'active' : ''}`;
    favoriteButton.setAttribute('data-movie-id', movie.id);
    favoriteButton.innerHTML = isMovieFavorite ? '❤️' : '🤍';
    
    // Añadir el evento click directamente al botón
    favoriteButton.addEventListener('click', () => {
        window.toggleFavorite(movie);
    });

    movieCard.innerHTML = `
        <img class="movie-poster" src="${posterPath}" alt="${movie.title}">
        <div class="movie-info">
            <div class="movie-header">
                <h3 class="movie-title">${movie.title}</h3>
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

    // Insertar el botón de favoritos en el header
    const movieHeader = movieCard.querySelector('.movie-header');
    movieHeader.appendChild(favoriteButton);

    return movieCard;
}

function formatDate(dateString) {
    if (!dateString) return 'No date available';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(config.LANGUAGE, options);
}

