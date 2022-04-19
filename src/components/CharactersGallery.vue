<template>
    <div class="characters-gallery">
        <CharacterCard
        v-for="character in charactersData"
        :key="character.id"
        :name="character.name"
        :gender="character.gender"
        :occupation="character.occupation"
        :firstEpisode="character.firstEpisode"
        :voicedBy="character.voicedBy"
        :pictureUrl="character.image"/>
    </div>
</template>

<script>
    import CharacterCard from './CharacterCard.vue'
    import getCharactersData from '@services/api/bobsburgersAPI.js'

    export default{
        name:'CharactersGallery',
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
        components: {
            CharacterCard
        },
    }
</script>

<style></style>