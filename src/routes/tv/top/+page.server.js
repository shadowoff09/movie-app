import 'dotenv/config';

export const load = async () => {
	const fetchTopRatedTVShow = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
		);
		const data = await res.json();
		return data.results;
	};

	return {
		topRatedTVShows: fetchTopRatedTVShow()
	};
};
