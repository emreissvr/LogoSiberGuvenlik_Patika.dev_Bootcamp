[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6920774&assignment_repo_type=AssignmentRepo)
# week1-assignment

- XMLHttpRequest araştırılacak ve jsonplaceholder kullanılarak içerisindeki userlar console’a yazdırılacak.

### Solution 1 - String 
![String](images/ScreenRecorderProject2.gif)
### Solution 2 - JSON
![JSON](images/ScreenRecorderProject3.gif)

## XMLHttpRequest nedir?
- XMLHttpRequest nesnesi, AJAX'ın anahtarıdır. 2005'te AJAX ve Web 2.0 ile popüler hale gelmesiyle keşfedildi.
- XMLHttpRequest (XHR), JavaScript, JScript, VBScript ve diğer web tarayıcı betik dilleri tarafından, HTTP kullanarak bir web sunucusuna XML verilerini aktarmak ve işlemek için kullanılabilen, bir web sayfasının İstemci Tarafı ile sunucu Tarafı arasında bağımsız bir bağlantı kanalı kuran bir API' dir. 
- XMLHttpRequest isteklerinden döndürülen veriler genellikle back-end veritabanları tarafından sağlanır. XML'in yanı sıra, XMLHttpRequest JSON ve düz metinler üzerinde de işlemler yapılmasına izin verir.
### XMLHttpRequest Yöntemleri
- **Abort() :** Mevcut isteği iptal eder.
- **getAllResponseHeaders() :** HTTP üstbilgilerinin tam kümesini bir dize olarak döndürür.
- **getResponseHeader(titleName) :** Belirtilen HTTP başlığının değerini döndürür.
- **open(method, URL) :** 
- **open(method, URL, async) :**
- **open(method, URL, async, userName) :**
- **open(method, URL, async, userName, password) :**

"async" parametresi, isteğin eşzamansız olarak ele alınıp alınmayacağını belirtir. "true", asenkron işleminin geçerli olduğunu gösterir. “true” ya da “false” parametresi verilmesse default olarak “true” parametresi alınmış olur.
- **send(content) :** İsteği gönderir.
- **setRequestHeader(label, value) :** Gönderilecek HTTP başlığına bir etiket/değer çifti ekler.
### XMLHttpRequest Özellikleri
- onreadystatechange : Her durum değişikliğinde tetiklenen bir event işleyicisi.
- readyState : ReadyState özelliği, XMLHttpRequest nesnesinin anlık durumunu tanımlar.
### Durum Açıklaması
- **0** request başlatılmadı.
- **1** request ayarlandı.
- **2** request gönderildi.
- **3** request işlemde.
- **4** request tamamlandı.

- **responseText :** Yanıtı bir dize olarak döndürür.
- **responseXML :** Yanıtı XML olarak döndürür. 
- **status :** Durumu bir sayı olarak döndürür (örneğin, "Bulunamadı" için 404 ve "Tamam" için 200).
- **statusText :** Durumu bir dize olarak döndürür (örneğin, "Bulunamadı" veya "Tamam").







