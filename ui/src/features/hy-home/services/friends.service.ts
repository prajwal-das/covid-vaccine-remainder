import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) {
  }

  getMyFriends(): any {
    const url = `/api/friends`;
    return this.http.get(url);
  }

  searchUsers(search): any {
    const url = `/api/user/search?key=${search}`;
    return this.http.get(url);
  }

  sendFriendRequest(userId): any {
    const url = `/api/friends/send/${userId}`;
    return this.http.post(url, null);
  }

  getAllFriendRequests(): any {
    const url = `/api/friends/requests`;
    return this.http.get(url);
  }

  acceptFriendRequest(userId): any {
    const url = `/api/friends/accept/${userId}`;
    return this.http.post(url, null);
  }

  getFriendsConnections(): any {
    const url = `/api/friends/connections`;
    return this.http.get(url);
  }
}
