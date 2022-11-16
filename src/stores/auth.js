import { reactive } from "vue";
import router from '../router';

export const auth = reactive({
  user: {
    name: localStorage.getItem("name") ?? "Rainers",
    surname: localStorage.getItem("surname") ?? "Smolenskis",
    code: localStorage.getItem("code") ?? "IT20008",
    favorite_songs: []
  },

  is_authenticated: localStorage.is_authenticated ?? false,

  setUserData(name, surname, code) {
    localStorage.setItem("name", name);
    this.user.name = name;
    localStorage.setItem("surname", surname);
    this.user.surname = surname;
    localStorage.setItem("code", code);
    this.user.code = code;
  },

  authenticate(email, password) {
    if (email === "rainers.smolenskis@va.lv" && password === "123456") {
      localStorage.is_authenticated = true;
      this.is_authenticated = true;
      router.replace('/');
    }
  },

  logout() {
    localStorage.clear();
    this.is_authenticated = false;
    router.replace('/login');
  },

  toggleFavorite(songID) {
    let index = this.user.favorite_songs.indexOf(songID);

    if (this.user.favorite_songs.includes(songID) == false) {
      this.user.favorite_songs.push(songID);
    } else {
      this.user.favorite_songs.splice(index, 1);
    }

    localStorage.setItem("tests", this.user.favorite_songs);
  },

  getFavoriteSongs() {
    return this.user.favorite_songs;
  }
});