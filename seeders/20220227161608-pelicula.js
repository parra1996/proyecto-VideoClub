'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('peliculas', [
      {"titulo":"Silver Bullet (Stephen King's Silver Bullet)","sinopsis":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.","adult":true,"fecha":"2021-09-29 02:30:49","image":"http://dummyimage.com/118x100.png/cc0000/ffffff","createdAt":"2021-05-02 23:46:45","updatedAt":"2022-01-17 00:14:48"},
      {"titulo":"Evil Roy Slade","sinopsis":"Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","adult":false,"fecha":"2021-10-13 14:05:31","image":"http://dummyimage.com/193x100.png/ff4444/ffffff","createdAt":"2021-08-31 04:33:52","updatedAt":"2021-09-28 10:37:24"},
      {"titulo":"Closure","sinopsis":"Maecenas rhoncus aliquam lacus.","adult":false,"fecha":"2022-02-22 06:47:31","image":"http://dummyimage.com/234x100.png/cc0000/ffffff","createdAt":"2021-09-15 16:07:38","updatedAt":"2022-02-22 22:36:57"},
      {"titulo":"Old Man and the Sea, The","sinopsis":"Fusce posuere felis sed lacus.","adult":false,"fecha":"2021-11-20 15:44:09","image":"http://dummyimage.com/212x100.png/ff4444/ffffff","createdAt":"2022-02-23 18:47:03","updatedAt":"2021-12-24 14:41:03"},
      {"titulo":"Adrenalin: Fear the Rush","sinopsis":"Vestibulum sed magna at nunc commodo placerat.","adult":true,"fecha":"2022-02-06 00:31:36","image":"http://dummyimage.com/242x100.png/5fa2dd/ffffff","createdAt":"2021-03-23 18:47:40","updatedAt":"2021-06-27 17:02:38"},
      {"titulo":"Snow and Ashes","sinopsis":"Nulla tellus.","adult":true,"fecha":"2021-08-21 16:47:40","image":"http://dummyimage.com/128x100.png/cc0000/ffffff","createdAt":"2021-10-01 01:04:36","updatedAt":"2021-05-23 05:16:11"},
      {"titulo":"Boy Friend, The","sinopsis":"Pellentesque eget nunc.","adult":true,"fecha":"2021-04-22 13:00:09","image":"http://dummyimage.com/197x100.png/cc0000/ffffff","createdAt":"2021-04-09 20:45:45","updatedAt":"2022-01-30 12:47:16"},
      {"titulo":"Cold Sweat (De la part des copains)","sinopsis":"Morbi porttitor lorem id ligula.","adult":true,"fecha":"2021-06-05 09:21:07","image":"http://dummyimage.com/125x100.png/dddddd/000000","createdAt":"2022-02-13 12:22:10","updatedAt":"2021-03-11 19:20:32"},
      {"titulo":"Fast & Furious 6 (Fast and the Furious 6, The)","sinopsis":"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.","adult":true,"fecha":"2021-12-26 02:32:36","image":"http://dummyimage.com/143x100.png/5fa2dd/ffffff","createdAt":"2022-01-24 15:13:37","updatedAt":"2021-08-16 02:42:43"},
      {"titulo":"House Arrest","sinopsis":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.","adult":false,"fecha":"2021-06-08 07:32:05","image":"http://dummyimage.com/188x100.png/ff4444/ffffff","createdAt":"2021-06-19 08:38:33","updatedAt":"2021-08-16 23:43:56"},
      {"titulo":"Jumping the Broom","sinopsis":"In est risus, auctor sed, tristique in, tempus sit amet, sem.","adult":true,"fecha":"2021-09-13 09:03:16","image":"http://dummyimage.com/176x100.png/ff4444/ffffff","createdAt":"2021-08-20 03:32:08","updatedAt":"2021-09-09 07:03:52"},
      {"titulo":"Living Proof","sinopsis":"Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","adult":false,"fecha":"2022-01-25 20:44:07","image":"http://dummyimage.com/121x100.png/ff4444/ffffff","createdAt":"2022-01-16 00:02:07","updatedAt":"2022-01-25 09:54:24"},
      {"titulo":"Last House on the Left, The","sinopsis":"Duis bibendum. Morbi non quam nec dui luctus rutrum.","adult":false,"fecha":"2021-04-17 10:31:54","image":"http://dummyimage.com/109x100.png/dddddd/000000","createdAt":"2021-09-30 19:38:35","updatedAt":"2021-03-19 16:45:04"},
      {"titulo":"Lassie Come Home","sinopsis":"Aliquam quis turpis eget elit sodales scelerisque.","adult":true,"fecha":"2021-09-23 09:25:27","image":"http://dummyimage.com/157x100.png/dddddd/000000","createdAt":"2021-03-20 05:13:23","updatedAt":"2021-11-08 04:07:31"},
      {"titulo":"Track of the Cat","sinopsis":"In congue.","adult":true,"fecha":"2021-03-26 13:17:19","image":"http://dummyimage.com/241x100.png/ff4444/ffffff","createdAt":"2022-02-14 22:31:25","updatedAt":"2021-09-04 09:27:20"},
      {"titulo":"Daddy Nostalgia (Daddy Nostalgie)","sinopsis":"Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.","adult":true,"fecha":"2021-04-02 03:14:44","image":"http://dummyimage.com/198x100.png/cc0000/ffffff","createdAt":"2021-08-22 22:51:44","updatedAt":"2021-09-20 16:00:54"},
      {"titulo":"Ah of Life, The","sinopsis":"Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.","adult":false,"fecha":"2021-12-18 20:57:53","image":"http://dummyimage.com/103x100.png/5fa2dd/ffffff","createdAt":"2021-10-15 07:35:10","updatedAt":"2021-07-09 04:05:01"},
      {"titulo":"Take Me Home","sinopsis":"Proin risus.","adult":false,"fecha":"2021-10-06 18:36:59","image":"http://dummyimage.com/220x100.png/ff4444/ffffff","createdAt":"2021-05-02 23:24:34","updatedAt":"2021-10-19 12:29:00"},
      {"titulo":"49th Parallel","sinopsis":"Morbi a ipsum.","adult":false,"fecha":"2021-06-09 21:15:10","image":"http://dummyimage.com/169x100.png/cc0000/ffffff","createdAt":"2021-04-30 05:41:43","updatedAt":"2021-07-30 18:15:36"},
      {"titulo":"Doggiewoggiez! Poochiewoochiez!","sinopsis":"Phasellus in felis. Donec semper sapien a libero.","adult":true,"fecha":"2021-06-24 03:33:33","image":"http://dummyimage.com/243x100.png/ff4444/ffffff","createdAt":"2021-12-05 12:26:35","updatedAt":"2022-01-07 07:08:58"}
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
