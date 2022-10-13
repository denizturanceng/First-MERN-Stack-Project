server tarafı =>
  create user, login user, create todo, delete todo postman ile kontrol edildi, çalışıyorlar. Client tarafıyla kontrol edildiler, çalışıyorlar. Sorun şu: Her farklı userın kendine ait todoları olması gerekli. Nanoid ile her user için unique id oluşturuldu fakat bu unique user id lerin todolara aktarılması yapılamadı. id leri birbirleriyle eşleştirerek bu sorunu çözmeye çalıştım ama başaramadım.
  
client tarafı =>
  header layoutını sign in den sonra değiştiremedim. yani giriş yapmadan önce register varken giriş yaptıktan sonra sağ üstte log out olmalıydı, kodu kendimce yazdım ama olmadı.
  todoların listelenmesi eksik. delete butonu için onsubmit methodu yazılacak.
  
  
