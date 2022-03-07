'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      [{"name":"Ema","age":12,"surname":"Filtness","email":"efiltness0@hao123.com","telefono":7,"dni":"Aliquam quis turpis eget elit sodales scelerisque.","password":"t90xucHK","rol":0,"createdAt":"2021-11-01 18:16:29","uptedAt":"2021-08-20 01:09:10"},
{"name":"Guntar","age":79,"surname":"Steet","email":"gsteet1@columbia.edu","telefono":10,"dni":"Suspendisse potenti.","password":"O2TDtvS","rol":0,"createdAt":"2021-10-08 11:44:16","uptedAt":"2021-11-22 06:54:26"},
{"name":"Neill","age":62,"surname":"Francescuccio","email":"nfrancescuccio2@zimbio.com","telefono":8,"dni":"Morbi quis tortor id nulla ultrices aliquet.","password":"KwQlbyY","rol":0,"createdAt":"2021-03-29 05:05:42","uptedAt":"2021-06-28 09:16:24"},
{"name":"Jim","age":22,"surname":"Kellogg","email":"jkellogg3@seesaa.net","telefono":9,"dni":"Aliquam non mauris.","password":"UaArvG","rol":1,"createdAt":"2021-07-10 20:53:23","uptedAt":"2021-12-22 15:48:10"},
{"name":"Felicio","age":19,"surname":"Mewhirter","email":"fmewhirter4@cbc.ca","telefono":8,"dni":"Suspendisse potenti.","password":"ZMYftyG","rol":1,"createdAt":"2021-09-05 12:38:40","uptedAt":"2021-05-17 00:24:58"},
{"name":"Marcello","age":67,"surname":"Orteau","email":"morteau5@cafepress.com","telefono":3,"dni":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.","password":"8GBgEyS","rol":1,"createdAt":"2022-01-25 12:30:14","uptedAt":"2021-05-27 15:09:11"},
{"name":"Kennan","age":94,"surname":"Kelledy","email":"kkelledy6@icq.com","telefono":4,"dni":"Aenean auctor gravida sem.","password":"a5cKnt","rol":0,"createdAt":"2021-06-16 01:43:23","uptedAt":"2022-01-16 15:34:45"},
{"name":"Johannah","age":98,"surname":"Jancic","email":"jjancic7@aol.com","telefono":2,"dni":"Nulla facilisi.","password":"cUsRjWZN6","rol":0,"createdAt":"2021-12-16 23:17:25","uptedAt":"2021-11-26 05:43:54"},
{"name":"Emmaline","age":70,"surname":"Dumper","email":"edumper8@pcworld.com","telefono":4,"dni":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","password":"h9jt9Co","rol":1,"createdAt":"2021-09-23 08:11:12","uptedAt":"2021-07-04 12:03:59"},
{"name":"Beltran","age":37,"surname":"Dimitriades","email":"bdimitriades9@oaic.gov.au","telefono":5,"dni":"Aliquam quis turpis eget elit sodales scelerisque.","password":"9SeRq3Z","rol":1,"createdAt":"2022-02-02 09:59:40","uptedAt":"2021-12-13 02:42:32"},
{"name":"Nichol","age":32,"surname":"Tolcher","email":"ntolchera@blinklist.com","telefono":3,"dni":"Duis consequat dui nec nisi volutpat eleifend.","password":"BgDZPUK1uNGY","rol":1,"createdAt":"2022-02-24 19:17:26","uptedAt":"2022-01-03 22:59:25"},
{"name":"Page","age":85,"surname":"Rehorek","email":"prehorekb@goo.ne.jp","telefono":7,"dni":"In hac habitasse platea dictumst.","password":"JvZErD","rol":1,"createdAt":"2022-03-05 08:45:45","uptedAt":"2021-09-13 01:32:42"},
{"name":"Elana","age":75,"surname":"Brim","email":"ebrimc@g.co","telefono":1,"dni":"Duis at velit eu est congue elementum.","password":"qLGJUGtqLLh","rol":0,"createdAt":"2021-06-20 21:19:29","uptedAt":"2021-05-24 18:54:19"},
{"name":"Ali","age":69,"surname":"Baroche","email":"abaroched@naver.com","telefono":1,"dni":"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.","password":"FRECsYi4","rol":0,"createdAt":"2021-06-23 07:23:36","uptedAt":"2021-05-04 23:23:58"},
{"name":"Denny","age":89,"surname":"Beddall","email":"dbeddalle@seattletimes.com","telefono":6,"dni":"In congue.","password":"npwULq","rol":1,"createdAt":"2021-06-15 00:37:11","uptedAt":"2022-01-19 22:20:09"},
{"name":"Normand","age":21,"surname":"Garric","email":"ngarricf@imageshack.us","telefono":9,"dni":"Nullam porttitor lacus at turpis.","password":"vun5l2rhq","rol":0,"createdAt":"2022-01-23 14:12:57","uptedAt":"2022-03-01 09:03:21"},
{"name":"Adiana","age":97,"surname":"Armell","email":"aarmellg@twitpic.com","telefono":2,"dni":"Praesent lectus.","password":"nz5xrvPLHi","rol":0,"createdAt":"2021-03-27 20:45:45","uptedAt":"2021-07-22 03:49:30"},
{"name":"Lodovico","age":4,"surname":"Penchen","email":"lpenchenh@cbslocal.com","telefono":8,"dni":"Maecenas ut massa quis augue luctus tincidunt.","password":"XCD5RA2y","rol":1,"createdAt":"2021-07-07 11:23:48","uptedAt":"2021-10-19 16:44:16"},
{"name":"Tiffanie","age":60,"surname":"Sherbourne","email":"tsherbournei@samsung.com","telefono":1,"dni":"Aliquam sit amet diam in magna bibendum imperdiet.","password":"MsPktHVZ","rol":1,"createdAt":"2021-12-16 23:49:21","uptedAt":"2021-04-06 04:58:45"},
{"name":"Carolina","age":93,"surname":"Duff","email":"cduffj@mozilla.com","telefono":9,"dni":"Mauris ullamcorper purus sit amet nulla.","password":"KLieVQPX","rol":1,"createdAt":"2021-11-19 09:11:50","uptedAt":"2021-08-05 22:27:26"},
{"name":"Mersey","age":38,"surname":"Bracchi","email":"mbracchik@reuters.com","telefono":6,"dni":"Nulla tempus.","password":"HkOtoZu6BGhQ","rol":1,"createdAt":"2021-04-09 14:31:15","uptedAt":"2021-07-17 11:30:35"},
{"name":"Yorker","age":90,"surname":"Scales","email":"yscalesl@xing.com","telefono":3,"dni":"Duis at velit eu est congue elementum.","password":"HJ59nZtlj","rol":0,"createdAt":"2021-03-17 22:52:06","uptedAt":"2021-03-09 03:32:11"},
{"name":"Puff","age":32,"surname":"Waszczyk","email":"pwaszczykm@spotify.com","telefono":6,"dni":"Morbi porttitor lorem id ligula.","password":"h641Wpq","rol":0,"createdAt":"2021-04-18 09:50:00","uptedAt":"2021-10-25 21:57:23"},
{"name":"Mahmud","age":60,"surname":"Loudiane","email":"mloudianen@utexas.edu","telefono":6,"dni":"Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","password":"WTAA3cL","rol":1,"createdAt":"2021-05-21 13:47:17","uptedAt":"2021-06-07 15:17:27"},
{"name":"Boone","age":18,"surname":"Bignal","email":"bbignalo@netvibes.com","telefono":7,"dni":"Sed accumsan felis.","password":"AAlH4QHUW","rol":1,"createdAt":"2021-04-07 03:10:34","uptedAt":"2021-04-12 20:27:20"}]
    ], {});
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
