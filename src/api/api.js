import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const grtUsers = (currentPage = 1,  pageSize = 10) =>{
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response => {
  	return response.data;
  })
}

export const grtBooks = () =>{
	return axios.get("https://raw.githubusercontent.com/SergeyDef/nitrenJSON-/master/books.json")
}

export const getPhoto = () =>{
	return axios.get('https://raw.githubusercontent.com/SergeyDef/nitrenJSON-/master/userPhotos.json')
 }

export const authAPI = {
	me () {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMy = false) {
		return  instance.post(`auth/login`, {email, password, rememberMy});
	},
	logout() {
		return  instance.delete(`auth/login`);
	},
}


