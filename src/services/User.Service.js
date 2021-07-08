import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

const API_URL = 'http://localhost:8080/api/user/';
const API_URL2= 'http://localhost:8080/api/listings/'
const API_URL3= 'http://localhost:8080/api/messages/'
const API_URL4= 'http://localhost:8080/api/offer/'


const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));


class UserService {


    get currentUserValue() {
        return currentUserSubject.value;
    }

    get currentUser() {
        return currentUserSubject.asObservable();
    }

     login(user) {
        
        const headers = {
            authorization: 'Basic ' + btoa(user.username + ':' + user.password),
        };
          return axios.get(API_URL + 'login', { headers: headers})
            .then(response => {
                response.data.password = user.password; // Store pure password.
                localStorage.setItem('currentUser', JSON.stringify(response.data));
                currentUserSubject.next(response.data);
            })
    }

        logOut() {
        return axios.post(API_URL + 'logout', {})
            .then(() => {
                localStorage.removeItem('currentUser');
                currentUserSubject.next(null);
            })
    }

     register(user) {
        return axios.post(API_URL , user);
    }

     changeRole(username, role) {
        return axios.put(API_URL + username + '/change/' + role, {});
    }

    uploadListing(homeDetails){
        return axios.post(API_URL2+ 'sellhome', homeDetails);
    }

    getAllListings(){
        return axios.get(API_URL2);
    }

    sendMessage(message){
        return axios.post(API_URL3, message);
    }

    sendOffer(offer){
        return axios.post(API_URL4,offer);
    }
}

export default new UserService()