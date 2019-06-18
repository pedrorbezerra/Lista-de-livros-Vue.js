var data = { 
         livros: [{ titulo: 'A Dança dos Dragões', autor: 'George R R Martin', checked: false },    
           { titulo: 'A Origem das Espécies', autor: 'Charles Darwin', checked: false },
           { titulo: 'O Imbecil Coletivo', autor: 'Olavo de Carvalho', checked: false },    
           { titulo: '1808', autor: 'Laurentino Gomes', checked: true },
           { titulo: 'O Príncipe', autor: 'Nicolau Maquiavel', checked: true }], 
   cabecalho: 'Lista de Livros - 2019', 
   novoLivro: '',
   novoAutor: ''
 };

 // Declarando os componentes

 var ItensComp = Vue.extend({ 
         data: function () { 
           return data; 
   }, 
   template: '<ul>' + 
   '           <li v-for="livro in livros" :class="{ \'removido\': livro.checked }">' + 
   '             <div class="checkbox">' + 
   '              <label>' + 
   '                     <input type="checkbox" v-model="livro.checked"> ' + 
   '                     <big>{{ livro.titulo }}</big> - <small>{{ livro.autor }}</small>' + 
   '              </label>' +  
   '             </div>' +  
   '           </li>' + 
   '         </ul>'
 });

 var AlteraTituloComp = Vue.extend({ 
         data: function () { 
           return data; 
   }, 
   template: '<input v-model="cabecalho"/>'
 }); 

 var AddItemComp = Vue.extend({ 
         data: function () { 
           return data; 
   }, 
   methods: { 
           addLivro: function () { 
             var titulo, autor;
             titulo = this.novoLivro.trim(); 
             autor = this.novoAutor.trim(); 
             if (titulo) { 
               this.livros.push({ 
                 titulo: titulo, 
                 autor: autor, 
                 checked: false
         }); 
         this.novoLivro = ""; 
         this.novoAutor = ""; 
       } 
     } 
   }, 
   template: 
     '<div>' + 
           '<input v-model="novoLivro" @keyup.enter="addLivro"' +
                  ' placeholder="Adicionar título do livro" type="text" class="form-control" />'  + 
           '<input v-model="novoAutor" @keyup.enter="addLivro"' +
                  ' placeholder="Adicionar autor do livro" type="text" class="form-control" /> <br/>'  + 
           '<span class="input-group-btn">' + 
           '  <button @click="addLivro" class="js-add btn btn-warning btn-block"' +
              ' type="button">Adicionar!</button>'  + 
           '</span>' +
     '<div>'
 }); 

 // Registrando componentes
  
 Vue.component('itens-comp', ItensComp); 
 Vue.component('altera-titulo-comp', AlteraTituloComp); 
 Vue.component('add-item-comp', AddItemComp);

 // Instanciando o Vue
  
 new Vue({ 
         el: '#app', 
   data: data 
 });