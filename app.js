$(document).ready(function(){
   $(".footer").hide();
   $("#btn0").click(function(){
      $(".footer").show();
       $.get("data.txt", function(data){
           var lines = data.split("\n");
           var table = $("<table />");
           for (var i = 0; i < lines.length; i++) {
               var row = $("<tr />");
               var cells = lines[i].split(",");
               for (var j = 0; j < cells.length; j++) {
                   var cell = $("<td />");
                   cell.html(cells[j]);
                   row.append(cell);
               }
               table.append(row);
           }
           $("#sonuc").html(table);
       });
   });
});

$(document).ready(function(){
   $("#ekle").hide();
   $("#btn1").click(function(){
      $("#ekle").show();
       var ad = $("#ad").val();
       var soyad = $("#soyad").val();
       var yas = $("#yas").val();
       var departman = $("#departman").val();
       var dataString = ad + "," + soyad + "," + yas + "," + departman;

       $("#ekle-btn").click(function(){
         $.ajax({
            method: "POST",
            url: "data.txt",
            data: dataString,
            success: function() {
               Swal.fire(
                  'Good job!',
                  'You clicked the button!',
                  'success'
                )
            }
         
         });
         let btn=document.querySelector('#ekle-btn');
         btn.addEventListener('click',function() {
    

            Swal.fire(
             'TEBRİKLER',
            'Personel Eklendi!',
             'success')
            
            })
       })
   });
});

$(document).ready(function(){
   $("#ekle").hide();
   $("#btn2").click(function(){
      $("#ekle").show();
       var ad = $("#ad").val();
       var soyad = $("#soyad").val();
       var yas = $("#yas").val();
       var departman = $("#departman").val();
       var dataString = ad + "," + soyad + "," + yas + "," + departman;

       $("#ekle-btn").click(function(){
         $.ajax({
            method: "POST",
            url: "data.txt",
            data: dataString,
            success: function() {
               Swal.fire(
                  'Başarılı!',
                  'Personel bilgileri güncellendi!',
                  'success'
                )
            }
         
         });
         let btn=document.querySelector('#ekle-btn');
         btn.addEventListener('click',function() {
    

            Swal.fire(
             'TEBRİKLER',
            'Personel Güncellendi!',
             'success')
            
            })
       })
   });
});


$(document).ready(function(){
   $("#ekle").hide();
   $("#btn2").click(function(){
      $("#ekle").show();
       var ad = $("#ad").val();
       var soyad = $("#soyad").val();
       var yas = $("#yas").val();
       var departman = $("#departman").val();
       var dataString = ad + "," + soyad + "," + yas + "," + departman;

       $("#ekle-btn").click(function(){
         $.ajax({
            method: "DELETE",
            url: "data.txt",
            data: dataString,
            success: function() {
               Swal.fire(
                  'Başarılı!',
                  'Personel bilgileri güncellendi!',
                  'success'
                )
            }
         
         });
         let btn=document.querySelector('#ekle-btn');
         btn.addEventListener('click',function() {
    

            Swal.fire(
             'TEBRİKLER',
            'Personel Güncellendi!',
             'success')
            
            })
       })
   });
});