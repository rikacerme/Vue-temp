<template>
  <div>
    <div >
      Detail
    </div>

    <div class="card" >
        <img :src="special.result.imageUrl" alt="about-img" style="width:20%">
        <h1>{{ special.result.positionName }}</h1>
        <p class="title">{{ special.result.companyName }}</p>
        <p>{{ special.result.durationDay }} Gündür yayında, {{ special.result.durationDayText }}</p>
        <p>Senin {{ special.result.distance }} </p>
        <a v-if="special.result.hasLongitude && special.result.hasLatitude" v-bind:href="'https://www.google.com/maps/@' +  special.result.latitude  +',' +  special.result.longitude  +',21z'" target="_blank">{{ special.result.townName }},{{ special.result.cityName }}</a> 
        <p>{{ special.result.address }}- {{ special.result.postalCode }} </p>
        <div>{{ special.result.description }}</div>
        <p>İletişim için ({{ special.result.contactPhone.countryCallingCode }})-{{ special.result.contactPhone.areaCode }}-{{ special.result.contactPhone.number }} </p>
        
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      proId: this.$route.params.id,
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
      special: {
        version: '1.0',
        statusCode: 200,
        result: {
          jobId: '199A9ED66BFE4CF593DBDF5402F1702A',
          positionName: 'Jandarma Bölge Komutanı',
          companyName: 'Vosyoyvsyvosyv',
          durationDay: 70,
          durationDayText: 'Taze çıktı!',
          imageUrl: 'https://www.w3schools.com/w3images/team2.jpg',
          countryCode: 'TR',
          countryName: 'Turkey',
          cityName: 'İstanbul',
          townName: 'Ümraniye',
          address: 'Saray Mahallesi 34768 Ümraniye/İstanbul Turkey',
          postalCode: 34768,
          hasLatitude: true,
          hasLongitude: true,
          latitude: 41.0266502,
          longitude: 29.1157803,
          description: 'syovsvyosvyoyvsoby',
          status: 1,
          contactPhone: {
            countryCallingCode: '+90',
            areaCode: '879',
            number: '9797979',
          },
        },
      },
    };
  },

  mounted: function() {
    let q = this.$route.params.id;
    console.log(q);
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
@import '@/styles.scss';

.button-group {
  @include button-group;
}
button.delete-button {
  @include button-delete;
}
.selected {
  @include selected-item;
}
.people {
  @include list;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
