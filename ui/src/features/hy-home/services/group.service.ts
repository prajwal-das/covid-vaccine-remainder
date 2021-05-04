import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {
  }

  createGroup(group): any {
    const url = `/api/groups`;
    console.log(group);
    return this.http.post(url, group);
  }

  getGroups(): any {
    const url = `/api/groups`;
    return this.http.get(url);
  }

  getGroupsConnections(): any {
    const url = `/api/groups/connections`;
    return this.http.get(url);
  }

  getGroupChat(groupId): any {
    const url = `/api/groups/${groupId}/chats`;
    return this.http.get(url);
  }

  addChatMessage(groupId, message): any {
    const url = `/api/groups/${groupId}/chats`;
    return this.http.post(url, message);
  }

  addCharMembers(groupId, userIds): any {
    const url = `/api/groups/${groupId}/members`;
    return this.http.post(url, userIds);
  }
}
