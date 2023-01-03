import 'dotenv/config';

export const load = async ({ params }) => {
	const fetchCast = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		const data = await res.json();
		return data.cast;
	};

	const fetchTvShowName = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/tv/${params.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		const data = await res.json();
		return data.name;
	};

	return {
		tvShowCast: fetchCast(),
		tvShowName: fetchTvShowName()
	};
};
