document.addEventListener("DOMContentLoaded", function(){

      var dadosSuperHeroi = {
          "nomeEsquadrao": "Tropa do Calvo",
          "cidade": "Sobradinho City",
          "formado": 2019,
          "baseSecreta": "taverna do marcos",
          "ativa": true,
          "membros": [
              {
                  "nome": "Marcus pitu",
                  "Idade": 28,
                  "identidadeSecreta": "Comentador de codigo man",
                  "poderes": ["escrever boas linhas de codigo", "boleiro", "criador de conteudo"]
              },
              {
                  "nome": "Breno",
                  "idade": 85,
                  "identidadeSecreta": "Bernardo",
                  "poderes": ["Jornalismo", "investigador", "injustiçado"]
              },
              {
                  "nome": "Susana perigosa",
                  "Idade": 21,
                  "identidadeSecreta": "CoringaGirl",
                  "poderes": ["Jiu Jutsu", "turismo", "Capoeirista" ]




                }


          ]
      };

      //selecionar a lista de super-herois onde a gente deseja inserir os membros

      var listaSuperHerois = document.getElementById('superheroes list')

      //interação sobre os membros da equipe criando os elementos de lista para cada um
      dadosSuperHeroi.membros.forEach(function(membro){
          var li = document.createElement("li")
          li.className = "list-group-item"
          li.innerHTML = `<strong>${membro.nome}</strong>
           (idade: ${membro.idade},
            identidade Secreta: ${membro.identidadeSecreta})<br>
            Poderes: ${membro.poderes.join(", ")}`
            listaSuperHerois.appendChild(li)

        })

})