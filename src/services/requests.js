import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/';


export const getCharacters = async () => {
	try {
		const res = await axios.get(`${url}/character`, {
			headers: {},
			params: {}
		});
        return res.data;
	} catch (err) {
		console.log(err);
	}
};



export const searchCharacters = async (name) => {
	try {
		const res = await axios.get(`${url}/character?name=${name}`);
        return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const getCharactersId = async (id) => {
	try {
		const res = await axios.get(`${url}/character/${id}`);
        return res.data;
	} catch (err) {
		console.log(err);
	}
};



export const getEpisode = async (urlcharacter) => {
	try {
		const res = await axios.get(`${urlcharacter}`);
        return res.data;
	} catch (err) {
		console.log(err);
	}
};