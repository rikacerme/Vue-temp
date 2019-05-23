<template>
  <div>
    <h1>Welcome to Your Vue.js App</h1>
    <input class="form-control" type="text" v-model="searchQuery"  placeholder="Search" />
     

      <h2>filtered</h2>
      <div class="card" v-for="item in filteredResources" :key='item.jobId'>
        <img :src="item.imageUrl" alt="about-img" style="width:20%">
        <h1>{{ item.positionName }}</h1>
        <p class="title">{{ item.companyName }}</p>
        <p>{{ item.durationDay }} Gündür yayında, {{ item.durationDayText }}</p>
        <p>Senin {{ item.distance }} </p>
        <a v-bind:href="'https://www.google.com/maps/@' +  item.latitude  +',' +  item.longitude  +',21z'" target="_blank">{{ item.townName }},{{ item.cityName }}</a> 
        <div style="margin: 24px 0;">
          <a href="#"><i class="fa fa-dribbble"></i></a>
        </div>
        <p><button @click="goTodetail(item.jobId)"  >İncele</button></p>
      </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      data: {
        version: 1.0,
        statusCode: 200,
        result: {
          items: [
            {
              jobId: 'C71CD1957BA775EA4FB',
              positionName: 'Gerber Operatörü',
              companyName: 'Testoğlu Lahmacun Pide Ve Kebap',
              durationDay: 1,
              durationDayText: 'Taze!',
              imageUrl: 'https://www.w3schools.com/w3images/team2.jpg',
              distance: '8,53 km yakınında',
              latitude: 41.050968170166023,
              longitude: 29.062856674194339,
              cityName: 'İstanbul',
              townName: 'Çengelköy Mahallesi',
            },
            {
              jobId: 'C71AD1954BA149BCAF42B25FB',
              positionName: 'Kapak Operatörü',
              companyName: 'Testoğlu Şişecilik',
              durationDay: 4,
              durationDayText: 'Taze!',
              imageUrl: 'https://www.w3schools.com/w3images/team2.jpg',
              distance: '8,53 km yakınında',
              latitude: 42.050968170166023,
              longitude: 28.062856674194339,
              cityName: 'İstanbul',
              townName: 'Orta Mahallesi',
            },
            {
              jobId: 'CD1954BA149BCBF42B25F775EA4FB',
              positionName: 'Genel Yardımcı',
              companyName: 'Testoğlu Şirketler Grubu',
              durationDay: 3,
              durationDayText: 'Taze!',
              imageUrl: 'https://www.w3schools.com/w3images/team2.jpg',
              distance: '30,53 km yakınında',
              latitude: 41.050968170166023,
              longitude: 27.062856674194339,
              cityName: 'İstanbul',
              townName: 'Büyük Mahallesi',
            },
            {
              jobId: 'C71CA149BCAF49B25F775EA4FB',
              positionName: 'Jr. Askıcı',
              companyName: 'Testoğlu ŞTİ',
              durationDay: 6,
              durationDayText: 'Taze!',
              imageUrl: 'https://www.w3schools.com/w3images/team2.jpg',
              distance: '53,00 km yakınında',
              latitude: 41.050968170166023,
              longitude: 26.062856674194339,
              cityName: 'İstanbul',
              townName: 'Küçük Mahallesi',
            },
            {
              jobId: 'C71CD19BA147BCAF42B25F7EA4FB',
              positionName: 'Balkon Yöneticisi',
              companyName: 'Testoğlu İnşaat',
              durationDay: 23,
              durationDayText: 'Taze!',
              imageUrl: 'https://www.w3schools.com/w3images/team2.jpg',
              distance: '20,53 km yakınında',
              latitude: 41.050968170166023,
              longitude: 25.062856674194339,
              cityName: 'İstanbul',
              townName: 'Zümrütevler Mahallesi',
            },
            {
              jobId: '71CD1954BA149BC42B25F775EFB',
              positionName: 'CanTan MÜHENDİSİ',
              companyName: 'Testoğlu Factoring',
              durationDay: 88,
              durationDayText: 'Tap Taze!',
              imageUrl: 'https://www.w3schools.com/w3images/team2.jpg',
              distance: '118,53 km yakınında',
              latitude: 41.050968177166023,
              longitude: 24.067654874194339,
              cityName: 'Bursa',
              townName: 'Çirişhane Mahallesi',
            },
            {
              jobId: 'C714FB',
              positionName: 'Çaycı',
              companyName: 'Testoğlu Çaycılık Zinciri',
              durationDay: 120,
              durationDayText: 'Taze!',
              imageUrl: 'https://www.w3schools.com/w3images/team2.jpg',
              distance: '138,53 km yakınında',
              latitude: 41.050968100166023,
              longitude: 23.062846674194339,
              cityName: 'Bursa',
              townName: 'Esentepe Mahallesi',
            },
          ],
          total: 0,
        },
      },
    };
  },

  computed: {
    filteredResources() {
      if (this.searchQuery.length > 0) {
        return (
          this.data.result.items.filter(item =>
            item.cityName.includes(this.searchQuery)
          ) ||
          this.data.result.items.filter(item =>
            item.positionName.includes(this.searchQuery)
          )
        );
      } else {
        return this.data.result.items;
      }
    },
  },

  methods: {
    goTodetail(prodId) {
      console.log(prodId);
      this.$router.push({ name: 'Details', params: { id: prodId } });
    },
  },
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover {
  opacity: 0.7;
}

a:hover {
  opacity: 0.7;
}
</style>
