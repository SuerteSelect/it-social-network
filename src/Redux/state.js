import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you', kolvLike: 20 },
                { id: 2, message: 'It is my first post', kolvLike: 30 },
                { id: 3, message: 'Yo', kolvLike: 15 }
            ],
            newPostText: 'it-kamasutra',
            profile: {
                "aboutMe": "я круто чувак 1001%",
                "contacts": {
                    "facebook": "facebook.com",
                    "website": null,
                    "vk": "vk.com/dimych",
                    "twitter": "https://twitter.com/@sdf",
                    "instagram": "instagra.com/sds",
                    "youtube": null,
                    "github": "github.com",
                    "mainLink": null
                }, 
                "lookingForAJob": true,
                "lookingForAJobDescription": "не ищу, а дурачусь",
                "fullName": "samurai dimych",
                "userId": 2,
                "photos": {
                    "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                    "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
                }
            }
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimich' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;