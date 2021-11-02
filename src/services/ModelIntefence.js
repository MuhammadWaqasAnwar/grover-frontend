import axios from "axios";
const domainname = "https://questionify.me"
export const updateModelConfig = async (data_to_submit) => {
	const res = await axios.post(`${domainname}/health/config`, data_to_submit)
	return res;
}

export const generateArticle = async (data_to_submit) => {
	const res = await axios.post(`${domainname}/predict`, data_to_submit)
	return res;
}

