<template>
    <div class="character-card">
        <img class="picture" v-bind:src="pictureUrl"/>
        <div>
            <h2 class="name">{{name}}</h2>
            <p class="gender">{{gender}}</p>
            <p class="occupation">{{occupation}}</p>
            <p class="firstEpisode">{{firstEpisode}}</p>
            <p class="voicedBy">{{voicedBy}}</p>
        </div>
    </div>
</template>

<script>
    export default{
        name:'CharacterCard',
        props:{
            name:{type: String, required : true},
            gender:String,
            occupation:String,
            firstEpisode:String,
            voicedBy:String,
            pictureUrl:{type:String, default:"https://my-best-kennel.com/pictures.default.png"}
        }
    }
</script>