<template>
    <div class="characters-gallery">
        <CharacterCard
        v-for="characters in charactersData"
        :key="characters.id"
        :name="characters.name"
        :gender="characters.gender"
        :occupation="characters.occupation"
        :firstEpisode="characters.firstEpisode"
        :voicedBy="characters.voicedBy"
        :pictureUrl="characters.image"
</template>

<script>
    import CharacterCard from './Character.vue'
    import getCharactersData from '@services/api/bobsburgersAPI.js'

    export default{
        name:'CharacterGallery',
        data(){
            return{
                charactersData:[]
            }
        },
        created:function(){
            this.retrieveCharactersData
        },
        methods:{
            async retrieveCharactersData(){
                this.charactersData=await getCharactersData()
            }
        },
        components:{
            CharacterCard
        },
    }
</script>

<style></style>