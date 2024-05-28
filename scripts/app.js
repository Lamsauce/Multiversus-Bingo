const colorLamsauce = function colorLamsauce(){
        $("#Lamsauce").on("click", function(event){      
            $('td').click(function(){
                $(this).css({ 'background-color': 'rgb(67, 180, 255)'});
            });
        });
      };

const colorGreen = function colorGreen(){
    $("#Gr33nme93").on("click", function(event){      
        $('td').click(function(){
            $(this).css({ 'background-color': "rgb(0, 201, 0)"});
        });
    });
  };

const colorErase = function colorErase(){
    $("#erase").on("click", function(event){      
        $('td').click(function(){
            $(this).css({ 'background-color': ''});
        });
    });
  };

  const colorClear = function colorClear(){
    $("#clear").click(function(){
        $('td').css({ 'background-color': ''});
    });
  };



colorGreen();
colorLamsauce();
colorErase();
colorClear();