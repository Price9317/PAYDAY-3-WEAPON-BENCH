function initialiseMagazineData(selectedWeapon) {
  weaponData[selectedWeapon] = weaponData[selectedWeapon] || [];
  const weaponmag = weaponData[selectedWeapon].name;
  var select = document.getElementById("Magazine-selector");
  var length = select.options.length;
    for (i = length-1; i >= 0; i--) {
      select.options[i] = null;
    }
  switch(weaponmag){
    case "MX63" :
    case "Mosconi 12 Classic" :
    case "Reinfeld 880" :
    case "Sforza Bison" :
    case "J&M Castigo 44" :
    case "Bullkick 500" :
        var options = ['默认']
        for (var i = 0; i < options.length; i++){
          var option = document.createElement('option');
          option.value = options[i];
          option.text = options[i];
          select.add(option);
        }
        break;
    case "Reinfeld 900S":
        var options = ['默认','扩容']
        for (var i = 0; i < options.length; i++){
          var option = document.createElement('option');
          option.value = options[i];
          option.text = options[i];
          select.add(option);
        }
        break;
    case "Signature 40":
    case "Signature 403":
    case "SP Model 11":
    case "Stryk 7":
    case "SA A144":
        var options = ['默认','快拔','扩容']
        for (var i = 0; i < options.length; i++){
        var option = document.createElement('option');
        option.value = options[i];
        option.text = options[i];
        select.add(option);
        }
        break;
    default:
        var options = ['默认','快拔','紧凑','扩容']
        for (var i = 0; i < options.length; i++){
        var option = document.createElement('option');
        option.value = options[i];
        option.text = options[i];
        select.add(option);
        }
        break;

  }    

}


