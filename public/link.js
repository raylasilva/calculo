function calcular() {
    var resultado1 = document.getElementById('resultado1');
    var  resultado2 = document.getElementById('resultado2');
    var  resultado3  = document.getElementById('resultado3');

    var altura= parseFloat(document.getElementById('altura').value,1.65);
    var peso = parseFloat(document.getElementById('peso').value,10);
    document.getElementById('resultado').innerHTML = peso/(altura * altura);
  
    
  

    
    

    if (document.getElementById('resultado').innerHTML <= 18.4){
        
    return resultado1.innerHTML ="Você está Abaixo do Peso.  Uma boa alimentação é essencial para termos uma rotina saúdavel";
    
   
    }
    
    

      else if(document.getElementById('resultado').innerHTML >=18.5 && document.getElementById('resultado').innerHTML<=24.9){
      return resultado2.innerHTML = " Seu Peso está Normal.  Estar saúdavel é bom, mas nunca se esqueça, se exercitar é sempre o melhor remédio para o corpo e para alma";
      
    }
      
      else {
      return  resultado3.innerHTML = "Você está acima do Peso.  A balança pode enganar, então antes de se automedicar consulte um especialista";
      }

      function atualizacao(atualizar){
          document.getElementById(atualizar).innerHTML = "";
      }

     

 }

