<script>
import { auth } from '../stores/auth'
export default {
    data() {
        return {
            auth,

            groupOne: false,
            groupTwo: true,

            newName: auth.user.name,
            newSurname: auth.user.surname,
            newCode: auth.user.code
        }
    },
    methods: {
        //Dienas beigās strādā, tākā viss ok :D
        editFormBtn() {
          this.groupOne = true;
          this.groupTwo = false;
        },

        cancelBtn() {
            this.groupOne = false;
            this.groupTwo = true;
        },

        saveBtn() {
            this.groupOne = false;
            this.groupTwo = true;
            this.auth.user.name = this.newName;
            this.auth.user.surname = this.newSurname;
            this.auth.user.code = this.newCode;
        }
    }
}
</script>

<template>
    <div id="about-view">
        <div class="wrapper-header">
            <h1>ABOUT ME</h1>
            <div class="settings">
                <div v-if="groupTwo"><button id="btn-show-favorites" @click="editFormBtn()">Edit Form</button></div>
                <div v-if="groupOne"><button id="btn-show-favorites" @click="cancelBtn()" :class="{active: groupOne}">Cancel</button></div>
                <div v-if="groupOne"><button id="btn-save" @click="saveBtn()">Save Form</button></div>
            </div>
        </div>
        <form>
            <div class="wrapper-input">
                <label>NAME</label>
                <div v-if="groupOne"><input v-model="newName" id="input-name" /></div>
                <div v-if="groupTwo"><p id="txt-name">{{ auth.user.name }}</p></div>
            </div>
            <div class="wrapper-input">
                <label>SURNAME</label>
                <div v-if="groupOne"><input v-model="newSurname" id="input-surname" /></div>
                <div v-if="groupTwo"><p id="txt-surname">{{ auth.user.surname }}</p></div>
            </div>
            <div class="wrapper-input">
                <label>STUDENT CODE</label>
                <div v-if="groupOne"><input v-model="newCode" id="input-code" /></div>
                <div v-if="groupTwo"><p id="txt-code">{{ auth.user.code }}</p></div>
            </div>
            <div class="wrapper-songs">
                <label>FAVORITE SONGS</label>
                <ul>
                    <li>
                        <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                        <div class="song-info">
                            <p id="txt-song" class="song-name">DEEP (feat. Nonô)</p>
                            <p id="txt-artist" class="song-artists">Example</p>
                        </div>
                    </li>
                </ul>
                <div id="txt-empty" class="empty">NO SONGS FOUND</div>
            </div>
        </form>
    </div>
</template>
