'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('peliculas', [
      [,
{"titulo":"Evil Roy Slade","sinopsis":"Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","adult":false,"fecha":"2021-10-13 14:05:31","image":"http://dummyimage.com/193x100.png/ff4444/ffffff","createdAt":"2021-08-31 04:33:52","updatedAt":"2021-09-28 10:37:24"},
{"titulo":"Closure","sinopsis":"Maecenas rhoncus aliquam lacus.","adult":false,"fecha":"2022-02-22 06:47:31","image":"http://dummyimage.com/234x100.png/cc0000/ffffff","createdAt":"2021-09-15 16:07:38","updatedAt":"2022-02-22 22:36:57"},
{"titulo":"Old Man and the Sea, The","sinopsis":"Fusce posuere felis sed lacus.","adult":false,"fecha":"2021-11-20 15:44:09","image":"http://dummyimage.com/212x100.png/ff4444/ffffff","createdAt":"2022-02-23 18:47:03","updatedAt":"2021-12-24 14:41:03"},
{"titulo":"Adrenalin: Fear the Rush","sinopsis":"Vestibulum sed magna at nunc commodo placerat.","adult":true,"fecha":"2022-02-06 00:31:36","image":"http://dummyimage.com/242x100.png/5fa2dd/ffffff","createdAt":"2021-03-23 18:47:40","updatedAt":"2021-06-27 17:02:38"},
{"titulo":"Snow and Ashes","sinopsis":"Nulla tellus.","adult":true,"fecha":"2021-08-21 16:47:40","image":"http://dummyimage.com/128x100.png/cc0000/ffffff","createdAt":"2021-10-01 01:04:36","updatedAt":"2021-05-23 05:16:11"},
{"titulo":"Boy Friend, The","sinopsis":"Pellentesque eget nunc.","adult":true,"fecha":"2021-04-22 13:00:09","image":"http://dummyimage.com/197x100.png/cc0000/ffffff","createdAt":"2021-04-09 20:45:45","updatedAt":"2022-01-30 12:47:16"},
{"titulo":"Cold Sweat (De la part des copains)","sinopsis":"Morbi porttitor lorem id ligula.","adult":true,"fecha":"2021-06-05 09:21:07","image":"http://dummyimage.com/125x100.png/dddddd/000000","createdAt":"2022-02-13 12:22:10","updatedAt":"2021-03-11 19:20:32"},
{"titulo":"Fast & Furious 6 (Fast and the Furious 6, The)","sinopsis":"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.","adult":true,"fecha":"2021-12-26 02:32:36","image":"http://dummyimage.com/143x100.png/5fa2dd/ffffff","createdAt":"2022-01-24 15:13:37","updatedAt":"2021-08-16 02:42:43"},
{"titulo":"Doggiewoggiez! Poochiewoochiez!","sinopsis":"Phasellus in felis. Donec semper sapien a libero.","adult":true,"fecha":"2021-06-24 03:33:33","image":"http://dummyimage.com/243x100.png/ff4444/ffffff","createdAt":"2021-12-05 12:26:35","updatedAt":"2022-01-07 07:08:58"}]
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
