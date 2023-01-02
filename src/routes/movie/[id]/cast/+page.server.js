import 'dotenv/config';

export const load = async ({ params }) => {
	const fetchCast = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		const data = await res.json();
		return data.cast;
	};

	const fetchMovieName = async () => {
		const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		const data = await res.json();
		return data.title;
	};

	return {
		movieCast: fetchCast(),
		movieName: fetchMovieName()
	};
};
