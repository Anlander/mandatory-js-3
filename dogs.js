let dog_api_breeds = 'https://dog.ceo/api/breeds/list/all';
let selectBreed = document.querySelector('#selectBreed');
let viewDog = document.querySelector('#viewDog');
let dogBreedImage = document.querySelector('#BreedImage');
let btn = document.querySelector("#buttrand");


$(document).ready(function(){
      $.ajax({
            type: "GET",
            url: dog_api_breeds,
            async: true,
            dataType:"json",
            success:function(data){
                    for (let i in data.message) {



                let op = `<option value="${i}">${i}</option>`
             selectBreed.insertAdjacentHTML('beforeend', op);


                    }
                }
            });


        $("#viewDog").click(function(){
            var searchTerm = $("#selectBreed").val();
            randompic = `https://dog.ceo/api/breed/${searchTerm}/images/random`;
            


            $.ajax({
                type: "GET",
                url: randompic,
                async: true,
                dataType:"json",
                success:function(data)
              {
                       breedImage.src = data.message;

                }

            });
        });
    });
