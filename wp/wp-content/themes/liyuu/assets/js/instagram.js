$.getJSON("../assets/php/instagram.php", function(instagramData){
    const galleryData = instagramData["media"]["data"];
    let photos = '<ul class="insta__list">';
    for (let i = 0; i < 9; i++) {
      if (galleryData[i]["thumbnail_url"]) {
        photos += '<li class="insta__item"><a href="' + galleryData[i].permalink + '" target="_blank" rel="noopener"><img src="' + galleryData[i].thumbnail_url + '" alt="' + galleryData[i].caption + '"></a></li>';
      } else if(galleryData[i]["media_url"].indexOf("video") == -1){
        photos += '<li class="insta__item"><a href="' + galleryData[i].permalink + '" target="_blank" rel="noopener"><img src="' + galleryData[i].media_url + '" alt="' + galleryData[i].caption + '"></a></li>';
      }
    };
    photos += "</ul>";
    $(".sec_insta_wrap").append(photos);
  });
