'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      {"name":"Sherline","age":58,"surname":"Obeney","email":"sobeney0@timesonline.co.uk","password":"fOg1D1Xnt","rol":false,"createdAt":"2021-10-07 20:45:48","updatedAt":"2021-10-19 05:23:11"},
      {"name":"Pernell","age":83,"surname":"Knight","email":"pknight1@surveymonkey.com","password":"SI6PCnJX","rol":false,"createdAt":"2021-09-20 12:33:00","updatedAt":"2021-12-17 21:56:32"},
      {"name":"Farica","age":3,"surname":"Ladel","email":"fladel2@samsung.com","password":"qKgnJy","rol":true,"createdAt":"2021-07-29 09:58:25","updatedAt":"2021-06-19 11:52:39"},
      {"name":"Borg","age":73,"surname":"Antoszewski","email":"bantoszewski3@taobao.com","password":"jsWHXbSubQP","rol":true,"createdAt":"2021-08-23 10:47:56","updatedAt":"2022-02-05 02:35:46"},
      {"name":"Audie","age":25,"surname":"Mussared","email":"amussared4@discovery.com","password":"BEutJ38mMw8K","rol":false,"createdAt":"2021-03-31 17:30:39","updatedAt":"2021-12-16 00:44:04"},
      {"name":"Guendolen","age":100,"surname":"Lazarus","email":"glazarus5@usgs.gov","password":"SEcPllsV3X3","rol":false,"createdAt":"2021-03-27 17:28:44","updatedAt":"2021-04-30 06:43:58"},
      {"name":"Ellie","age":53,"surname":"Rees","email":"erees6@accuweather.com","password":"6JBIrHV","rol":false,"createdAt":"2021-06-10 03:42:22","updatedAt":"2021-07-04 05:52:09"},
      {"name":"Sergio","age":6,"surname":"Tutchell","email":"stutchell7@unesco.org","password":"8LUEWPv0Zhve","rol":true,"createdAt":"2021-03-17 18:58:39","updatedAt":"2021-07-22 20:38:46"},
      {"name":"Trescha","age":75,"surname":"Beadnell","email":"tbeadnell8@indiatimes.com","password":"GEuoga","rol":false,"createdAt":"2022-02-08 00:42:55","updatedAt":"2021-04-08 11:31:10"},
      {"name":"Lizabeth","age":62,"surname":"Deaville","email":"ldeaville9@spiegel.de","password":"OQudMohYj","rol":false,"createdAt":"2021-07-01 20:33:11","updatedAt":"2021-07-07 23:38:10"},
      {"name":"Valeria","age":56,"surname":"Rusling","email":"vruslinga@tiny.cc","password":"08vTviFLN","rol":false,"createdAt":"2021-10-01 03:10:54","updatedAt":"2021-12-19 16:41:11"},
      {"name":"Annie","age":59,"surname":"Soutar","email":"asoutarb@amazon.co.uk","password":"2wwVsEqEo9U","rol":true,"createdAt":"2021-11-22 06:49:09","updatedAt":"2022-02-17 14:14:12"},
      {"name":"Jonas","age":23,"surname":"Chastelain","email":"jchastelainc@technorati.com","password":"cuOjIYq","rol":true,"createdAt":"2021-04-02 23:30:20","updatedAt":"2021-03-06 15:40:42"},
      {"name":"Stanislas","age":55,"surname":"Kydde","email":"skydded@smh.com.au","password":"yUrYBi","rol":true,"createdAt":"2022-02-25 19:54:09","updatedAt":"2021-11-18 23:04:23"},
      {"name":"Reed","age":70,"surname":"Pringell","email":"rpringelle@nps.gov","password":"0f9tO4vC4","rol":true,"createdAt":"2022-02-22 05:41:44","updatedAt":"2021-08-07 19:07:44"},
      {"name":"Juline","age":43,"surname":"Peetermann","email":"jpeetermannf@mediafire.com","password":"MWDnrOvlDp2","rol":false,"createdAt":"2021-03-21 15:34:41","updatedAt":"2021-10-29 17:34:08"},
      {"name":"Reinaldo","age":98,"surname":"Bridge","email":"rbridgeg@domainmarket.com","password":"xxqWVg936OR","rol":false,"createdAt":"2021-03-15 05:07:16","updatedAt":"2021-11-25 05:16:10"},
      {"name":"Vevay","age":34,"surname":"Bedham","email":"vbedhamh@tripadvisor.com","password":"4YvXk74HeDhe","rol":false,"createdAt":"2021-03-20 19:44:21","updatedAt":"2021-11-10 17:36:47"},
      {"name":"Winifred","age":85,"surname":"Corradetti","email":"wcorradettii@istockphoto.com","password":"PfjuIyP","rol":true,"createdAt":"2022-01-12 15:26:12","updatedAt":"2021-07-03 07:49:37"},
      {"name":"Ali","age":97,"surname":"McKibbin","email":"amckibbinj@printfriendly.com","password":"n7uZneX","rol":true,"createdAt":"2021-03-31 19:59:34","updatedAt":"2021-05-08 09:32:57"}
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
