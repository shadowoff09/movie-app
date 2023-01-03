import 'dotenv/config';

export const load = async ({ params }) => {
	const fetchEpisodesDetails = async () => {
		const resInfo = await fetch(
			`https://api.themoviedb.org/3/tv/${params.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
		);
		const dataToGetEpisodes = await resInfo.json();

		const resEpisodes = await fetch(
			`https://api.themoviedb.org/3/tv/${params.id}/season/${dataToGetEpisodes.number_of_seasons}/${dataToGetEpisodes.number_of_episodes}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		const data = await resEpisodes.json();
		return data;
	};

	return {
		episodesDetails: fetchEpisodesDetails()
	};
};
