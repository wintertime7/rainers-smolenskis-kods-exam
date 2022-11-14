import { reactive } from "vue";

export const auth = reactive({
  user: {
    name: "Rainers",
    surname: "Smolenskis",
    code: "IT20008",
    favorite_songs: localStorage.getItem("favorite_songs") ?? []
  },

  is_authenticated: localStorage.is_authenticated ?? false,

  setUserData(name, surname, code) {
    this.user.name = name;
    this.user.surname = surname;
    this.user.code = code;
  },

  authenticate(email, password) {
    if (email == "rainers.smolenskis@va.lv" && password == "123456") {
      localStorage.is_authenticated = true;
      this.is_authenticated = true;
      router.replace("/");
    }
  },

  logout() {
    localStorage.clear();
    this.is_authenticated = false;
    router.replace("/login");
  },

  toggleFavorite(songID) {
    this.user.favorite_songs.forEach((song, index) => {
      if (song != songID) {
        this.user.favorite_songs.push(songID);
      } else {
        this.user.favorite_songs.splice(index, 1);
      }
    });

    localStorage.setItem("favorite_songs", this.user.favorite_songs);
  },

  getFavoriteSongs() {
    return this.user.favorite_songs;
  }
});