import 'dotenv/config';

export const load = async ({ params }) => {
	const fetchPersonDetails = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		const data = await res.json();
		return data;
	};

	return {
		personDetails: fetchPersonDetails(),
		params: params
	};
};

